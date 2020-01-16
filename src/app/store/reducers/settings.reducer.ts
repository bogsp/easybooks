import { ActionTypes, ActionsUnion } from '../actions/settings.actions';

export interface State {
    currency: string;
    listview: string;
    isLoading: boolean;
}

const initialState: State = {
    currency: '',
    listview: 'all',
    isLoading: false
};

export function SettingsReducer(
    state = initialState,
    action: ActionsUnion
) {
    switch (action.type) {
        case ActionTypes.FETCH_CURRENCY:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.SET_CURRENCY:
            return {
                ...state,
                currency: action.payload,
                isLoading: false
            };
        case ActionTypes.FETCH_LISTVIEW:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.SET_LISTVIEW:
            return {
                ...state,
                listview: action.payload,
                isLoading: false
            };
        default: { return state; }
    }
}
