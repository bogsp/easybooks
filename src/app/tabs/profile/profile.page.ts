import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

import {
  AppState,
  AuthService,
  ProfileService
} from '../../store';
import { Category, Types } from '../../store/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  id: string;
  private subs = new SubSink();
  categories: Category[];

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.subs.add(
      this.store.select('category')
        .pipe(map(state => { this.categories = state.items; }))
        .subscribe(),
      this.store.select('user')
        .pipe(map(state => { this.id = state.itemId; }))
        .subscribe()
    );
  }

  save() { }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() { this.subs.unsubscribe(); }

}
