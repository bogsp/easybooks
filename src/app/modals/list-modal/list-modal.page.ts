import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

import { AppState, ExpenseService } from '../../store';
import { Types, Expense, Category } from '../../store/models';
import { ExpenseModalPage } from '../expense-modal/expense-modal.page';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.page.html',
  styleUrls: ['./list-modal.page.scss'],
})
export class ListModalPage implements OnInit, OnDestroy {
  @Input() category: Category;
  @Input() type: Types;
  @Input() curr: string;
  private subs = new SubSink();
  categories: Category[];
  items: Expense[];

  constructor(
    private store: Store<AppState>,
    private expenseService: ExpenseService,
    private modalController: ModalController,
    private navParams: NavParams
  ) { this.category = this.navParams.get('category'); }

  ngOnInit() {
    this.subs.add(
      this.store
        .select('category')
        .pipe(map(state => state.items))
        .subscribe(items => { this.categories = items; }),
      this.store
        .select('expenses')
        .pipe(map(state => state.items))
        .subscribe(items => {
          this.items = items
            .filter(c => c.categoryId === this.category.id)
            .filter(t => t.typeid === this.type.id);
        }),
    );
  }

  delete(id: string) {
    this.expenseService.delete(id);
  }

  ngOnDestroy() { this.subs.unsubscribe(); }

  async presentModal(i: Expense) {
    const modal = await this.modalController.create({
      component: ExpenseModalPage,
      componentProps: {
        item: i,
        categories: this.categories
      }
    });
    return await modal.present();
  }

  dismiss() { this.modalController.dismiss({ dismissed: true }); }

}
