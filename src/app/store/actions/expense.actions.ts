import { Action } from '@ngrx/store';
import { Expense } from '../models';

export enum ActionTypes {
    FETCH = '[Expense] Fetch',
    SET = '[Expense] Set',
    FETCH_ALL = '[Expense] Fetch All',
    SET_ALL = '[Expense] Set All',
    ADD = '[Expense] Add',
    ADD_CUSTOM = '[Expense] Add Custom',
    UPDATE = '[Expense] Update',
    DELETE = '[Expense] Delete',
    START_EDIT = '[Expense] Start Edit',
    STOP_EDIT = '[Expense] Stop Edit',
    ERROR = '[Expense] Error',
    CLEAR_ERROR = '[Expense] Clear Error'
}

export class Fetch implements Action {
    readonly type = ActionTypes.FETCH;

    constructor(public payload: { id: string, key: string }) { }
}

export class Set implements Action {
    readonly type = ActionTypes.SET;

    constructor(public payload: Expense) { }
}

export class FetchAll implements Action {
    readonly type = ActionTypes.FETCH_ALL;

    constructor(public payload: string) { }
}

export class SetAll implements Action {
    readonly type = ActionTypes.SET_ALL;

    constructor(public payload: Expense[]) { }
}

export class Add implements Action {
    readonly type = ActionTypes.ADD;

    constructor(public payload: { id: string, item: Expense }) { }
}

export class AddCustom implements Action {
    readonly type = ActionTypes.ADD_CUSTOM;

    constructor(public payload: { id: string, item: Expense }) { }
}

export class Update implements Action {
    readonly type = ActionTypes.UPDATE;

    constructor(public payload: { id: string, item: Expense }) { }
}

export class Delete implements Action {
    readonly type = ActionTypes.DELETE;

    constructor(public payload: { id: string, key: string }) { }
}

export class StartEdit implements Action {
    readonly type = ActionTypes.START_EDIT;
}

export class StopEdit implements Action {
    readonly type = ActionTypes.STOP_EDIT;
}

export class Error implements Action {
    readonly type = ActionTypes.ERROR;

    constructor(public payload: { header: string, message: string }) { }
}

export class ClearError implements Action {
    readonly type = ActionTypes.CLEAR_ERROR;
}

export type ActionsUnion =
    | Fetch
    | Set
    | FetchAll
    | SetAll
    | Add
    | AddCustom
    | Update
    | Delete
    | StartEdit
    | StopEdit
    | Error
    | ClearError;
