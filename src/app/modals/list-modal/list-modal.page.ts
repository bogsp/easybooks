import { Component, OnInit, Input } from '@angular/core';
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
export class ListModalPage implements OnInit {
  @Input() type: Types;
  @Input() expenses: Expense[];
  @Input() curr: string;
  private subs = new SubSink();
  items: Expense[];
  categories: Category[];

  constructor(
    private store: Store<AppState>,
    private expenseService: ExpenseService,
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.subs.add(
      this.store
        .select('category')
        .pipe(map(state => state.items))
        .subscribe(categories => {
          this.categories = categories;
        })
    );
    if (this.expenses) {
      this.items = this.expenses
        .filter(t => t.typeid === this.type.id);
    }
  }

  delete(id: string) {
    this.expenseService.delete(id);
    this.dismiss();
  }

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

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
