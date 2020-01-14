import { Action } from '@ngrx/store';
import { Profile } from '../models';

export enum ActionTypes {
    FETCH = '[Profile] Fetch',
    SET = '[Profile] Set',
    FETCH_ALL = '[Profile] Fetch All',
    SET_ALL = '[Profile] Set All',
    ADD = '[Profile] Add',
    ADD_CUSTOM = '[Profile] Add Custom',
    UPDATE = '[Profile] Update',
    DELETE = '[Profile] Delete',
    START_EDIT = '[Profile] Start Edit',
    STOP_EDIT = '[Profile] Stop Edit',
    ERROR = '[Profile] Error',
    CLEAR_ERROR = '[Profile] Clear Error'
}

export class Fetch implements Action {
    readonly type = ActionTypes.FETCH;

    constructor(public payload: string) { }
}

export class Set implements Action {
    readonly type = ActionTypes.SET;

    constructor(public payload: Profile) { }
}

export class FetchAll implements Action {
    readonly type = ActionTypes.FETCH_ALL;
}

export class SetAll implements Action {
    readonly type = ActionTypes.SET_ALL;

    constructor(public payload: Profile[]) { }
}

export class Add implements Action {
    readonly type = ActionTypes.ADD;

    constructor(public payload: Profile) { }
}

export class AddCustom implements Action {
    readonly type = ActionTypes.ADD_CUSTOM;

    constructor(public payload: Profile) { }
}

export class Update implements Action {
    readonly type = ActionTypes.UPDATE;

    constructor(public payload: Profile) { }
}

export class Delete implements Action {
    readonly type = ActionTypes.DELETE;

    constructor(public payload: string) { }
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
