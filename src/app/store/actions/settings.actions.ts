import { Action } from '@ngrx/store';

export enum ActionTypes {
    FETCH_CURRENCY = '[Settings] Fetch Currency',
    SET_CURRENCY = '[Settings] Set Currency',
    FETCH_LISTVIEW = '[Settings] Fetch Listview',
    SET_LISTVIEW = '[Settings] Set Listview',
}

export class FetchCurrency implements Action {
    readonly type = ActionTypes.FETCH_CURRENCY;
}

export class SetCurrency implements Action {
    readonly type = ActionTypes.SET_CURRENCY;

    constructor(public payload: string) { }
}

export class FetchListview implements Action {
    readonly type = ActionTypes.FETCH_LISTVIEW;
}

export class SetListview implements Action {
    readonly type = ActionTypes.SET_LISTVIEW;

    constructor(public payload: string) { }
}

export type ActionsUnion =
    | FetchCurrency
    | SetCurrency
    | FetchListview
    | SetListview;
