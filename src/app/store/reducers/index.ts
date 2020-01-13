import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromAuth from './auth.reducer';

export interface AppState {
  auth: fromAuth.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.AuthReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
