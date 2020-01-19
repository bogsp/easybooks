import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
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
  Update
} from '../actions/expense.actions';
import { Expense } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private subs = new SubSink();
  isAuth: boolean;
  uid: string;
  item: Expense;
  items: Expense[];
  itemId: string;
  isEditing: boolean;
  isLoading: boolean;
  total: number;
  error: { header: string; message: string };

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {
    this.uid = this.authService.user.id;
    if (!!this.uid) {
      this.fetchAll();
    }

    this.subs.add(
      this.store
        .select('expenses')
        .pipe(map(state => state.items))
        .subscribe(items => { this.items = items; }),

      this.store
        .select('expenses')
        .pipe(map(state => state.item))
        .subscribe(item => { this.item = item; }),

      this.store
        .select('expenses')
        .pipe(map(state => state.itemId))
        .subscribe(itemId => { this.itemId = itemId; }),

      this.store
        .select('expenses')
        .pipe(map(state => state.isEditing))
        .subscribe(isEditing => { this.isEditing = isEditing; }),

      this.store
        .select('expenses')
        .pipe(map(state => state.isLoading))
        .subscribe(loading => { this.isLoading = loading; }),

      this.store
        .select('expenses')
        .pipe(map(state => state.total))
        .subscribe(total => { this.total = total; }),

      this.store
        .select('expenses')
        .pipe(map(state => state.error))
        .subscribe(error => { this.error = error; })
    );

    this.isAuth = this.authService.isAuth;
    if (!this.isAuth) {
      this.unsub();
    }
  }

  getItem() { return this.item; }

  getItems() { return this.items; }

  getItemId() { return this.itemId; }

  getIsEditing() { return this.isEditing; }

  getIsLoading() { return this.isLoading; }

  getError() { return this.error; }

  fetchAll() {
    this.store.dispatch(new FetchAll(this.uid));
  }

  fetch(key: string) {
    this.store.dispatch(new Fetch({ id: this.uid, key }));
  }

  add(item: Expense) {
    this.store.dispatch(new Add({ id: this.uid, item }));
  }

  addCustom(item: Expense) {
    this.store.dispatch(new AddCustom({ id: this.uid, item }));
  }

  update(item: Expense) {
    this.store.dispatch(new Update({ id: this.uid, item }));
  }

  delete(key: string) {
    this.store.dispatch(new Delete({ id: this.uid, key }));
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
