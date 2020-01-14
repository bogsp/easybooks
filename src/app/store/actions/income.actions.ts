import { Action } from '@ngrx/store';
import { Income } from '../models';

export enum ActionTypes {
    FETCH = '[Income] Fetch',
    SET = '[Income] Set',
    FETCH_ALL = '[Income] Fetch All',
    SET_ALL = '[Income] Set All',
    ADD = '[Income] Add',
    ADD_CUSTOM = '[Income] Add Custom',
    UPDATE = '[Income] Update',
    DELETE = '[Income] Delete',
    START_EDIT = '[Income] Start Edit',
    STOP_EDIT = '[Income] Stop Edit',
    ERROR = '[Income] Error',
    CLEAR_ERROR = '[Income] Clear Error'
}

export class Fetch implements Action {
    readonly type = ActionTypes.FETCH;

    constructor(public payload: { id: string, key: string }) { }
}

export class Set implements Action {
    readonly type = ActionTypes.SET;

    constructor(public payload: Income) { }
}

export class FetchAll implements Action {
    readonly type = ActionTypes.FETCH_ALL;

    constructor(public payload: string) { }
}

export class SetAll implements Action {
    readonly type = ActionTypes.SET_ALL;

    constructor(public payload: Income[]) { }
}

export class Add implements Action {
    readonly type = ActionTypes.ADD;

    constructor(public payload: { id: string, item: Income }) { }
}

export class AddCustom implements Action {
    readonly type = ActionTypes.ADD_CUSTOM;

    constructor(public payload: { id: string, item: Income }) { }
}

export class Update implements Action {
    readonly type = ActionTypes.UPDATE;

    constructor(public payload: { id: string, item: Income }) { }
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
