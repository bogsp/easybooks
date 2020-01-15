import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

import { AppState } from '..';
import { AuthService } from './auth.service';
import {
  Add,
  AddCustom,
  Delete,
  Fetch,
  FetchAll,
  StartEdit,
  StopEdit,
  Update,
} from '../actions/income.actions';
import { Income } from '../models';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private subs = new SubSink();
  isAuth: boolean;
  items: Income[];
  item: Income;
  id: string;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
  ) {
    this.id = this.authService.user.id;
    if (!!this.id) { this.fetchAll(); }

    this.isAuth = this.authService.isAuth;
    if (!this.isAuth) { this.unsub(); }
  }

  fetchAll() {
    this.store.dispatch(new FetchAll(this.id));
  }

  fetch(key: string) {
    this.store.dispatch(new Fetch({ id: this.id, key }));
  }

  add(item: Income) {
    this.store.dispatch(new Add({id: this.id, item}));
  }

  addCustom(item: Income) {
    this.store.dispatch(new AddCustom({id: this.id, item}));
  }

  update(item: Income) {
    this.store.dispatch(new Update({id: this.id, item}));
  }

  delete(key: string) {
    this.store.dispatch(new Delete({id: this.id, key}));
  }

  startEdit() {
    this.store.dispatch(new StartEdit());
  }

  stoptEdit() {
    this.store.dispatch(new StopEdit());
  }

  unsub() {
    this.subs.unsubscribe();
  }

}
