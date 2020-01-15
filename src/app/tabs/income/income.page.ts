import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

import { AppState } from '../../store';
import { Category, Types } from '../../store/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit, OnDestroy {
  private subs = new SubSink();
  category: Category;
  types: Types[];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.subs.sink = this.store
      .select('category')
      .pipe(
        map(state => {
          state.items.map(a => {
            if (a.name === 'Income') { this.category = a; }
          });
        })
      )
      .subscribe();
  }

  add() { }

  ngOnDestroy() { this.subs.unsubscribe(); }

}
