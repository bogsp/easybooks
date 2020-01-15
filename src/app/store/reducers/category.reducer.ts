import { ActionTypes, ActionsUnion } from '../actions/category.actions';
import { Category } from '../models';

export interface State {
    item: Category;
    items: Category[];
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

export function CategoryReducer(
    state = initialState,
    action: ActionsUnion
) {
    switch (action.type) {
        case ActionTypes.FETCH:
        case ActionTypes.FETCH_ALL:
        case ActionTypes.FETCH_ALL_TYPES:
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
        case ActionTypes.SET_TYPE:
            const setItem = { ...state.items };
            const setCat = setItem[action.payload.id];
            setCat.push(action.payload.types);
            return {
                ...state,
                items: [...setItem],
                isLoading: false
            };
        case ActionTypes.SET_ALL:
            return {
                ...state,
                items: [...action.payload],
                isLoading: false
            };
        case ActionTypes.SET_ALL_TYPES:
            const setTypes: Category[] = [...state.items].map(c => {
                if (c.id === action.payload.id) {
                    return { ...c, types: [...action.payload.types] } as Category;
                } else { return c; }
            });
            return {
                ...state,
                items: [...setTypes],
                isLoading: false
            };
        case ActionTypes.UPDATE:
            return {
                ...state,
                item: action.payload
            };
        case ActionTypes.UPDATE_TYPE:
            const upItems = { ...state.items };
            const upCat = upItems[action.payload.id];
            upCat.types[action.payload.id] = action.payload.item;
            return {
                ...state,
                items: [...upItems]
            };
        case ActionTypes.DELETE:
            return {
                ...state,
                item: null,
                itemId: null
            };
        case ActionTypes.DELETE_TYPE:
            const delItems = { ...state.items };
            const delCat = delItems[action.payload.id];
            delCat.types = delCat.types.splice(action.payload.key);
            return {
                ...state,
                items: [...delItems]
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
