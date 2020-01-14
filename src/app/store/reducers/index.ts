import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromAuth from './auth.reducer';
import * as fromCategory from './category.reducer';
import * as fromExpense from './expense.reducer';
import * as fromIncome from './income.reducer';
import * as fromProfile from './profile.reducer';

export interface AppState {
  auth: fromAuth.State;
  category: fromCategory.State;
  expenses: fromExpense.State;
  income: fromIncome.State;
  user: fromProfile.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.AuthReducer,
  category: fromCategory.CategoryReducer,
  expenses: fromExpense.ExpenseReducer,
  income: fromIncome.IncomeReducer,
  user: fromProfile.ProfileReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
