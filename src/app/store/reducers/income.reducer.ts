import { ActionTypes, ActionsUnion } from '../actions/income.actions';
import { Income } from '../models';

export interface State {
    item: Income;
    items: Income[];
    itemId: string;
    isEditing: boolean;
    isLoading: boolean;
    error: { header: string, message: string };
}

const initialState: State = {
    item: null,
    items: [],
    itemId: null,
    isEditing: false,
    isLoading: false,
    error: null
};

export function IncomeReducer(
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
                isLoading: false
            };
        case ActionTypes.SET_ALL:
            return {
                ...state,
                items: [...action.payload]
            };
        case ActionTypes.UPDATE:
            return {
                ...state,
                item: action.payload.item
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
