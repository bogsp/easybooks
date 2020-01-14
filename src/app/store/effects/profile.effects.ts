import { Injectable } from '@angular/core';
import { of } from 'rxjs';
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
} from '../actions/profile.actions';
import { DataService } from '../services/data.service';
import { Profile } from '../models';

const handleError = (err: any) => {
    console.log(err);
    const header = 'Error!';
    const message = 'An unknown error occured!';
    return { header, message };
};

@Injectable()
export class ProfileEffects {
    feature = 'profiles';

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
                map((items: Profile[]) => new SetAll(items)),
                catchError(err => of(new Error(handleError(err))))
            )
        )
    );

    @Effect()
    fetch = this.actions$.pipe(
        ofType<Fetch>(ActionTypes.FETCH),
        switchMap(action => this.dataService
            .fetchItem(this.feature, action.payload, action.payload)
            .pipe(
                map((item: Profile) => new Set(item)),
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
}
