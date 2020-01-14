import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { switchMap, map, take, catchError, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
    ActionTypes,
    Add,
    AddCustom,
    Delete,
    Error,
    Fetch,
    FetchAll,
    Set,
    SetAll,
    Update,
    FetchAllTypes,
    SetAllTypes,
    AddType,
    SetType,
    UpdateType,
    DeleteType,
} from '../actions/category.actions';
import { DataService } from '../services/data.service';
import { Category, Types } from '../models';

const handleError = (err: any) => {
    console.log(err);
    const header = 'Error!';
    const message = 'An unknown error occured!';
    return { header, message };
};

@Injectable()
export class CategoryEffects {
    feature = 'categories';
    sub = 'types';

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }

    @Effect()
    fetchAll = this.actions$.pipe(
        ofType<FetchAll>(ActionTypes.FETCH_ALL),
        take(1),
        switchMap(() => this.dataService
            .fetchAll(this.feature)
            .pipe(
                map((items: Category[]) => new SetAll(items)),
                catchError(err => of(new Error(handleError(err))))
            )
        )
    );

    @Effect()
    fetchAllTypes = this.actions$.pipe(
        ofType<FetchAllTypes>(ActionTypes.FETCH_ALL_TYPES),
        switchMap(action => this.dataService
            .fetchAll(this.sub, action.payload)
            .pipe(
                // tap((items: Types[]) => console.log(items)),
                map((items: Types[]) => new SetAllTypes({ id: action.payload, types: [...items] })),
                catchError(err => of(new Error(handleError(err))))
            )
        )
    );

    @Effect()
    fetch = this.actions$.pipe(
        ofType<Fetch>(ActionTypes.FETCH),
        switchMap(action => this.dataService
            .fetchItem(this.feature, action.payload)
            .pipe(
                map((item: Category) => new Set(item)),
                catchError(err => of(new Error(handleError(err))))
            )
        )
    );

    @Effect()
    add = this.actions$.pipe(
        ofType<Add>(ActionTypes.ADD),
        switchMap(action =>
            this.dataService
                .addItem(this.feature, action.payload)
                .pipe(
                    map(() => new Set(action.payload)),
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );

    @Effect()
    addType = this.actions$.pipe(
        ofType<AddType>(ActionTypes.ADD_TYPE),
        switchMap(action =>
            this.dataService
                .addItem(this.sub, action.payload.item, action.payload.id)
                .pipe(
                    map(() => new SetType({ id: action.payload.id, types: action.payload.item })),
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );

    @Effect()
    addCustom = this.actions$.pipe(
        ofType<AddCustom>(ActionTypes.ADD_CUSTOM),
        switchMap(action =>
            this.dataService
                .addCustomItem(this.feature, action.payload)
                .pipe(
                    map(() => new Set(action.payload)),
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );

    @Effect()
    update = this.actions$.pipe(
        ofType<Update>(ActionTypes.UPDATE),
        switchMap(action =>
            this.dataService
                .updateItem(this.feature, action.payload)
                .pipe(
                    map(() => new Set(action.payload)),
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );

    @Effect()
    updateType = this.actions$.pipe(
        ofType<UpdateType>(ActionTypes.UPDATE_TYPE),
        switchMap(action =>
            this.dataService
                .updateItem(this.sub, action.payload.item, action.payload.id)
                .pipe(
                    map(() => new SetType({
                        id: action.payload.id,
                        types: action.payload.item
                    })),
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );

    @Effect()
    delete = this.actions$.pipe(
        ofType<Delete>(ActionTypes.DELETE),
        switchMap(action =>
            this.dataService
                .deleteItem(this.feature, action.payload)
                .pipe(
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );


    @Effect()
    deleteType = this.actions$.pipe(
        ofType<DeleteType>(ActionTypes.DELETE_TYPE),
        switchMap(action =>
            this.dataService
                .deleteItem(this.sub, action.payload.key, action.payload.id)
                .pipe(
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );

}
