import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../store';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

import { AppState } from '../../store';
import { Category, Types } from '../../store/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  private subs = new SubSink();
  categories: Category[];

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.subs.sink = this.store.select('category').subscribe(state => {
      this.categories = state.items;
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() { this.subs.unsubscribe(); }

}
