import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingController, ModalController } from '@ionic/angular';
import { SubSink } from 'subsink';

import { ExpenseModalPage } from '../../modals';
import {
  AppState,
  CategoryService,
  ExpenseService,
  IncomeService,
  ProfileService,
} from '../../store';
import { Category, Expense } from '../../store/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  private subs = new SubSink();
  categories: Category[];
  expenses: Expense[];
  isLoading: boolean;
  curr: string;
  totalIncome: number;
  totalExpenses: number;
  showHome = true;
  showLiving = true;
  showTrans = true;
  showEduc = true;
  showMisc = true;

  constructor(
    private store: Store<AppState>,
    private categoryService: CategoryService,
    private expenseService: ExpenseService,
    private incomeService: IncomeService,
    private profileService: ProfileService,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.subs.add(
      this.store
        .select('user')
        .pipe(map(state => state.curency))
        .subscribe(curency => {
          this.curr = curency;
        }),
      this.store
        .select('category')
        .pipe(map(state => state.isLoading))
        .subscribe(loading => {
          this.isLoading = loading;
          if (this.isLoading) { this.presentLoading(); }
        }),
      this.store
        .select('category')
        .pipe(map(state => state.items))
        .subscribe(items => {
          this.categories = items;
        }),
      this.store
        .select('expenses')
        .pipe(map(state => state.isLoading))
        .subscribe(loading => {
          this.isLoading = loading;
          if (this.isLoading) { this.presentLoading(); }
        }),
      this.store
        .select('expenses')
        .pipe(map(state => state.items))
        .subscribe(items => {
          this.expenses = items;
        }),
      this.store
        .select('expenses')
        .pipe(map(state => state.total))
        .subscribe(total => {
          this.totalExpenses = total;
        }),
      this.store
        .select('income')
        .pipe(map(state => state.isLoading))
        .subscribe(loading => {
          this.isLoading = loading;
          if (this.isLoading) { this.presentLoading(); }
        }),
      this.store
        .select('income')
        .pipe(map(state => state.total))
        .subscribe(total => {
          this.totalIncome = total;
        }),
    );

  }

  filterDates(event: any) { console.log(event); }

  refresh(event: any) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnDestroy() { this.subs.unsubscribe(); }

  getAmount(id: string) {
    return this.expenses
      .filter(exp => exp.categoryId === id)
      .reduce((a, e) => a + e.amount, 0);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ExpenseModalPage,
      componentProps: {
        newExpense: true,
        categories: this.categories
      }
    });
    return await modal.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

}
