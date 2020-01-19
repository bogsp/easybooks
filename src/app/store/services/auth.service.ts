import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '..';
import {
  AutoLogin,
  ClearError,
  Login,
  Logout,
  Signup,
} from '../actions/auth.actions';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  token: string;
  isAuth: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('auth').subscribe(state => {
      this.user = state.user;
      if (!!this.user) { this.token = this.user.token; }
      this.isAuth = state.isAuth;
    });
  }

  signup(email: string, password: string) { this.store.dispatch(new Signup({ email, password })); }

  login(email: string, password: string) { this.store.dispatch(new Login({ email, password })); }

  autoLogin() { this.store.dispatch(new AutoLogin()); }

  logout() { this.store.dispatch(new Logout()); }

  clearError() { this.store.dispatch(new ClearError()); }

}
