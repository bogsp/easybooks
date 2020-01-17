import { ActionTypes, ActionsUnion } from '../actions/profile.actions';
import { Profile } from '../models';

export interface State {
    item: Profile;
    itemId: string;
    isEditing: boolean;
    isLoading: boolean;
    curency: string;
    listview: string;
    error: { header: string, message: string };
}

const initialState: State = {
    item: null,
    itemId: null,
    isEditing: false,
    isLoading: false,
    curency: '',
    listview: 'all',
    error: null
};

export function ProfileReducer(
    state = initialState,
    action: ActionsUnion
) {
    switch (action.type) {
        case ActionTypes.FETCH:
        case ActionTypes.FETCH_ALL:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.SET:
            return {
                ...state,
                item: action.payload,
                itemId: action.payload.id,
                isLoading: false,
                curency: action.payload.currency,
                listview: action.payload.listview
            };
        case ActionTypes.SET_ALL:
            return {
                ...state,
            };
        case ActionTypes.UPDATE:
            return {
                ...state,
                item: action.payload
            };
        case ActionTypes.DELETE:
            return {
                ...state,
                item: null,
                itemId: null
            };
        case ActionTypes.START_EDIT:
            return {
                ...state,
                isEditing: true
            };
        case ActionTypes.STOP_EDIT:
            return {
                ...state,
                isEditing: false
            };
        case ActionTypes.ERROR:
            return {
                ...state,
                error: action.payload
            };
        case ActionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default: { return state; }
    }
}
