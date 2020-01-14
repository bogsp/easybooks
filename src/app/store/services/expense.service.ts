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
} from '../actions/expense.actions';
import { Expense } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private subs = new SubSink();
  isAuth: boolean;
  items: Expense[];
  item: Expense;
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

  fetch(id: string) {
    this.store.dispatch(new Fetch({ id: this.id, key: id }));
  }

  add(item: Expense) {
    this.store.dispatch(new Add({id: this.id, item}));
  }

  addCustom(item: Expense) {
    this.store.dispatch(new AddCustom({id: this.id, item}));
  }

  update(item: Expense) {
    this.store.dispatch(new Update({id: this.id, item}));
  }

  delete(id: string) {
    this.store.dispatch(new Delete({id: this.id, key: id}));
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
