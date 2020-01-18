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
} from '../actions/profile.actions';
import { Profile } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private subs = new SubSink();
  isAuth: boolean;
  items: Profile[];
  item: Profile;
  id: string;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
  ) {
    this.isAuth = this.authService.isAuth;
    if (!this.isAuth) { this.unsub(); }
  }

  fetchAll() { this.store.dispatch(new FetchAll()); }

  fetch(id: string) { this.store.dispatch(new Fetch(id)); }

  add(item: Profile) { this.store.dispatch(new Add(item)); }

  addCustom(item: Profile) { this.store.dispatch(new AddCustom(item)); }

  update(item: Profile) { this.store.dispatch(new Update(item)); }

  delete(id: string) { this.store.dispatch(new Delete(id)); }

  startEdit() { this.store.dispatch(new StartEdit()); }

  stoptEdit() { this.store.dispatch(new StopEdit()); }

  unsub() { this.subs.unsubscribe(); }

}
