import { ActionTypes, ActionsUnion } from '../actions/income.actions';
import { Income, Types } from '../models';

export interface State {
    item: Income;
    items: Income[];
    itemId: string;
    isEditing: boolean;
    isLoading: boolean;
    total: number;
    types: Types[];
    error: { header: string, message: string };
}

const initialState: State = {
    item: null,
    items: [],
    itemId: null,
    isEditing: false,
    isLoading: false,
    total: 0,
    types: [
        {
            id: 'Y3QMZWsXDlcMa2mrVH81',
            name: 'Salaries',
            description: 'Income from salaries and wages.',
            index: 0
        },
        {
            id: 'CWrw4EQbigy2AaF7GMx6',
            name: 'Sales',
            description: 'Income from sales.',
            index: 1
        },
        {
            id: 'tf4Z8h8sMqSMoqYI4k4H',
            name: 'Projects',
            description: 'Income from projects and services.',
            index: 2
        },
        {
            id: 'Magy5joUh65JErrDFwcY',
            name: 'Remittances',
            description: 'Remittances.',
            index: 3
        },
        {
            id: '70Ka9KO9seyXBYoD5JEL',
            name: 'Other',
            description: 'Miscellaneous and other income.',
            index: 4
        },
    ],
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
            const totals = [...action.payload].reduce((a, e) => a + e.amount, 0);
            return {
                ...state,
                items: [...action.payload],
                total: totals,
                isLoading: false
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
