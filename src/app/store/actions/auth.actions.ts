import { Action } from '@ngrx/store';

export enum ActionTypes {
    SIGNUP = '[Auth] Signup',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    AUTO_LOGIN = '[Auth] Auto Login',
    LOGOUT = '[Auth] Logout',
    AUTH_FAILED = '[Auth] Auth Failed',
    CLEAR_ERROR = '[Auth] Clear Error'
}

export class Signup implements Action {
    readonly type = ActionTypes.SIGNUP;

    constructor(
        public payload: {
            email: string,
            password: string
        }
    ) { }
}

export class SignupSuccess implements Action {
    readonly type = ActionTypes.SIGNUP_SUCCESS;

    constructor(
        public payload: {
            email: string;
            userId: string;
            token: string;
            redirect: boolean;
        }
    ) { }
}

export class Login implements Action {
    readonly type = ActionTypes.LOGIN;

    constructor(
        public payload: {
            email: string,
            password: string
        }
    ) { }
}

export class LoginSuccess implements Action {
    readonly type = ActionTypes.LOGIN_SUCCESS;

    constructor(
        public payload: {
            email: string;
            userId: string;
            token: string;
            redirect: boolean;
        }
    ) { }
}

export class AutoLogin implements Action {
    readonly type = ActionTypes.AUTO_LOGIN;
}

export class Logout implements Action {
    readonly type = ActionTypes.LOGOUT;
}

export class AuthFailed implements Action {
    readonly type = ActionTypes.AUTH_FAILED;

    constructor(public payload: { header: string, message: string }) { }
}

export class ClearError implements Action {
    readonly type = ActionTypes.CLEAR_ERROR;
}

export type ActionsUnion = Signup
    | SignupSuccess
    | Login
    | LoginSuccess
    | AutoLogin
    | Logout
    | AuthFailed
    | ClearError;
