import { Action } from '@ngrx/store';
import { Category, Types } from '../models';

export enum ActionTypes {
    FETCH = '[Category] Fetch',
    SET = '[Category] Set',
    SET_TYPE = '[Category] Set Type',
    FETCH_ALL = '[Category] Fetch All',
    SET_ALL = '[Category] Set All',
    FETCH_ALL_TYPES = '[Category] Fetch All Types',
    SET_ALL_TYPES = '[Category] Set All Types',
    ADD = '[Category] Add',
    ADD_CUSTOM = '[Category] Add Custom',
    ADD_TYPE = '[Category] Add Type',
    UPDATE = '[Category] Update',
    UPDATE_TYPE = '[Category] Update Type',
    DELETE = '[Category] Delete',
    DELETE_TYPE = '[Category] Delete Type',
    START_EDIT = '[Category] Start Edit',
    STOP_EDIT = '[Category] Stop Edit',
    ERROR = '[Category] Error',
    CLEAR_ERROR = '[Category] Clear Error'
}

export class Fetch implements Action {
    readonly type = ActionTypes.FETCH;

    constructor(public payload: string) { }
}

export class Set implements Action {
    readonly type = ActionTypes.SET;

    constructor(public payload: Category) { }
}

export class SetType implements Action {
    readonly type = ActionTypes.SET_TYPE;

    constructor(public payload: {id: string, types: Types}) { }
}

export class FetchAll implements Action {
    readonly type = ActionTypes.FETCH_ALL;
}

export class SetAll implements Action {
    readonly type = ActionTypes.SET_ALL;

    constructor(public payload: Category[]) { }
}

export class FetchAllTypes implements Action {
    readonly type = ActionTypes.FETCH_ALL_TYPES;

    constructor(public payload: string) { }
}

export class SetAllTypes implements Action {
    readonly type = ActionTypes.SET_ALL_TYPES;

    constructor(public payload: {id: string, types: Types[]}) { }
}

export class Add implements Action {
    readonly type = ActionTypes.ADD;

    constructor(public payload: Category) { }
}

export class AddCustom implements Action {
    readonly type = ActionTypes.ADD_CUSTOM;

    constructor(public payload: Category) { }
}

export class AddType implements Action {
    readonly type = ActionTypes.ADD_TYPE;

    constructor(public payload: { id: string, item: Types }) { }
}

export class Update implements Action {
    readonly type = ActionTypes.UPDATE;

    constructor(public payload: Category) { }
}

export class UpdateType implements Action {
    readonly type = ActionTypes.UPDATE_TYPE;

    constructor(public payload: { id: string, item: Types }) { }
}

export class Delete implements Action {
    readonly type = ActionTypes.DELETE;

    constructor(public payload: string) { }
}

export class DeleteType implements Action {
    readonly type = ActionTypes.DELETE_TYPE;

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
    | SetType
    | FetchAll
    | SetAll
    | FetchAllTypes
    | SetAllTypes
    | Add
    | AddCustom
    | AddType
    | Update
    | UpdateType
    | Delete
    | DeleteType
    | StartEdit
    | StopEdit
    | Error
    | ClearError;
