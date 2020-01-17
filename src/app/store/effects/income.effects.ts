import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, map, take, catchError } from 'rxjs/operators';
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
} from '../actions/income.actions';
import { DataService } from '../services/data.service';
import { Income } from '../models';

const handleError = (err: any) => {
    console.log(err);
    const header = 'Error!';
    const message = 'An unknown error occured!';
    return { header, message };
};

@Injectable()
export class IncomeEffects {
    feature = 'income';

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }

    @Effect()
    fetchAll = this.actions$.pipe(
        ofType<FetchAll>(ActionTypes.FETCH_ALL),
        take(1),
        switchMap(action => this.dataService
            .fetchAll(this.feature, action.payload)
            .pipe(
                map((items: Income[]) => new SetAll(items.sort((a, b) => (a.date > b.date) ? -1 : ((a.date < b.date) ? 1 : 0)))),
                catchError(err => of(new Error(handleError(err))))
            )
        )
    );

    @Effect()
    fetch = this.actions$.pipe(
        ofType<Fetch>(ActionTypes.FETCH),
        switchMap(action => this.dataService
            .fetchItem(this.feature, action.payload.key, action.payload.id)
            .pipe(
                map((item: Income) => new Set(item)),
                catchError(err => of(new Error(handleError(err))))
            )
        )
    );

    @Effect()
    add = this.actions$.pipe(
        ofType<Add>(ActionTypes.ADD),
        switchMap(action =>
            this.dataService
                .addItem(this.feature, action.payload.item, action.payload.id)
                .pipe(
                    map(() => new Set(action.payload.item)),
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );

    @Effect()
    addCustom = this.actions$.pipe(
        ofType<AddCustom>(ActionTypes.ADD_CUSTOM),
        switchMap(action =>
            this.dataService
                .addCustomItem(this.feature, action.payload.item, action.payload.id)
                .pipe(
                    map(() => new Set(action.payload.item)),
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );

    @Effect()
    update = this.actions$.pipe(
        ofType<Update>(ActionTypes.UPDATE),
        switchMap(action =>
            this.dataService
                .updateItem(this.feature, action.payload.item, action.payload.id)
                .pipe(
                    map(() => new Set(action.payload.item)),
                    catchError(err => of(new Error(handleError(err))))
                )
        )
    );

    @Effect({ dispatch: false })
    delete = this.actions$.pipe(
        ofType<Delete>(ActionTypes.DELETE),
        map(action =>
            this.dataService
                .deleteItem(this.feature, action.payload.key, action.payload.id)
        )
    );
}
