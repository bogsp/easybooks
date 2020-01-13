import { ActionTypes, ActionsUnion } from '../actions/auth.actions';
import { User } from '../models';

export interface State {
    user: User;
    authError: {
        header: string,
        message: string
    };
    loading: boolean;
    isAuth: boolean;
}

const initialState: State = {
    user: null,
    authError: null,
    loading: false,
    isAuth: false
};

export function AuthReducer(state = initialState, action: ActionsUnion) {
    switch (action.type) {
        case ActionTypes.SIGNUP:
        case ActionTypes.LOGIN:
            return {
                ...state,
                authError: null,
                loading: true
            };
        case ActionTypes.SIGNUP_SUCCESS:
        case ActionTypes.LOGIN_SUCCESS:
            const newUser = new User(
                action.payload.email,
                action.payload.userId,
                action.payload.token
            );
            return {
                ...state,
                authError: null,
                user: newUser,
                loading: false,
                isAuth: true
            };
        case ActionTypes.AUTH_FAILED:
            return {
                ...state,
                user: null,
                authError: action.payload,
                loading: false,
                isAuth: false
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                isAuth: false
            };
        case ActionTypes.CLEAR_ERROR:
            return {
                ...state,
                authError: null
            };
        default: { return state; }
    }
}
