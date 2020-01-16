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
    items: [
        {
            id: '8lXBbAgksXDLNG625AuO',
            name: 'Household',
            description: 'Household expenses.',
            types: [
                {
                    id: 'JMu2wIz8XhfPYdZm3jOC',
                    name: 'Mortgage',
                    description: 'Mortgage, house payments or rent.',
                    index: 0
                },
                {
                    id: 'p3qdn3NUEBlzpfZYWW0M',
                    name: 'Utilities',
                    description: 'Electricity, water and gas.',
                    index: 1
                },
                {
                    id: 'r9C3DGrbe2pA98YCRfKS',
                    name: 'Communication',
                    description: 'Phone, internet and cable tv.',
                    index: 2
                },
                {
                    id: 'S1iW361BtIaAxshcgcci',
                    name: 'Subscriptions',
                    description: 'Miscellaneous subscriptions.',
                    index: 3
                },
                {
                    id: '7OR5oAPsTcRl73ydzbG3',
                    name: 'Maintenance',
                    description: 'Home maintenance supplies and equipment.',
                    index: 4
                },
                {
                    id: '7S2dqkzrs9V5sllqHHIC',
                    name: 'Home Improvement',
                    description: 'Home improvements, repairs and renovations',
                    index: 5
                },
                {
                    id: 'cJOF2MYFN0U0nkfSDYrA',
                    name: 'Other',
                    description: 'Miscellaneous household expenses.',
                    index: 6
                },
            ],
            index: 0
        },
        {
            id: '45a8qE0upOkLXy3Xzg9w',
            name: 'Daily Living',
            description: 'Daily living expenses.',
            types: [
                {
                    id: '79mrZ0IoP01t9wHxxjur',
                    name: 'Groceries',
                    description: 'Groceries and other food supplies.',
                    index: 0
                },
                {
                    id: 'vmLWLFPu2GTrpcqY7CvS',
                    name: 'Clothing',
                    description: 'Clothing and other articles.',
                    index: 1
                },
                {
                    id: 'Fc8NZlHPPBSckJ30onCD',
                    name: 'Hygiene',
                    description: 'Personal hygiene, grooming supplies, salon and barber.',
                    index: 2
                },
                {
                    id: 'F341OsdeZEOV1oplEUu9',
                    name: 'Health',
                    description: 'Medical and health related expenses.',
                    index: 3
                },
                {
                    id: '0Sa5noBN2kAq8Ptk5nWp',
                    name: 'Insurance',
                    description: 'Personal insurance.',
                    index: 4
                },
                {
                    id: '6l5wjqHj3bXkTFghLzk6',
                    name: 'Dining',
                    description: 'Dining and eating out.',
                    index: 5
                },
                {
                    id: '0ZlIb3z0dv4g0wDdTIBP',
                    name: 'Entertainment',
                    description: 'Entertainment expenses.',
                    index: 6
                },
                {
                    id: 'yggDn8SBUKZ4RB8LpV3A',
                    name: 'Other',
                    description: 'Miscellaneous daily living expenses.',
                    index: 7
                },
            ],
            index: 1
        },
        {
            id: 'WFwAorK6AwBieXdZKjtI',
            name: 'Transportation',
            description: 'Vehicle and transportation expenses.',
            types: [
                {
                    id: 'AhYnurWIzAMV2tpOMC9k',
                    name: 'Vehicle Payments',
                    description: 'Car and other vehicle payments.',
                    index: 0
                },
                {
                    id: 'tv4DZvOFDPVZ4SOilD9P',
                    name: 'Auto Insurance',
                    description: 'Car and other vehicle insurance.',
                    index: 1
                },
                {
                    id: 'KaERwLvmmndna2UZ3TjF',
                    name: 'Fuel',
                    description: 'Petrol and fuel expenses.',
                    index: 2
                },
                {
                    id: '09xwpOjDForxeHHisgg9',
                    name: 'Transportation Fare',
                    description: 'Tickets and other travel fare.',
                    index: 3
                },
                {
                    id: '4lsDq7QFuP8Elveo6s3z',
                    name: 'Repairs',
                    description: 'Vehicle repair and maintenance expenses.',
                    index: 4
                },
                {
                    id: 'a19Fki8Mrqi2vewBK0Y2',
                    name: 'Registration',
                    description: 'Drivers license and vehicle registration.',
                    index: 5
                },
                {
                    id: 'aoBEP47HyqwhImVyPQhH',
                    name: 'Other',
                    description: 'Miscellaneous transportation expenses.',
                    index: 6
                },
            ],
            index: 2
        },
        {
            id: 'GDs3IX3m8yzkXL9Z49zw',
            name: 'Education',
            description: 'Education related expenses.',
            types: [
                {
                    id: 'ryXn0lO8okopUDkQ5NaS',
                    name: 'Tuition',
                    description: 'Tuition fees and course purchases.',
                    index: 0
                },
                {
                    id: 'JK0pfrw0KxLytxjxpN3d',
                    name: 'Allowance',
                    description: 'School allowance and pocket money.',
                    index: 1
                },
                {
                    id: 'S9Zqevd0ySJXXMU2iRG9',
                    name: 'Loans',
                    description: 'Student loans and other payments.',
                    index: 2
                },
                {
                    id: 'rI7afr5qE2mV07yXtNM3',
                    name: 'Other',
                    description: 'Miscellaneous education related expenses.',
                    index: 3
                },
            ],
            index: 3
        },
        {
            id: 'DxIWMMkHbGgCGFdJGG6J',
            name: 'Miscellaneous',
            description: 'Miscellaneous expenses.',
            types: [
                {
                    id: 'lTFIDX1SkDYhn76Vqq4f',
                    name: 'Pet Supplies',
                    description: 'Pet food and supplies.',
                    index: 0
                },
                {
                    id: 'xz4xGeYKRinS2GRgv7yl',
                    name: 'Pet Health',
                    description: 'Pet grooming and veterinary expenses.',
                    index: 1
                },
            ],
            index: 4
        },
    ],
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
