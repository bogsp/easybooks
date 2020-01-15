import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { LoadingController, ModalController } from '@ionic/angular';
import { SubSink } from 'subsink';

import { ExpensePage } from '../../modals';
import {
  AppState,
  CategoryService,
  ExpenseService,
  IncomeService,
  ProfileService,
} from '../../store';
import { Category, Expense } from '../../store/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  private subs = new SubSink();
  categories: Category[];
  expenses: Expense[];
  isLoading = true;
  curr = '';
  amount = 500;
  totalIncome = 1500;
  totalExpenses: number;
  totalHome = 500;
  totalLiving = 300;
  totalTrans = 200;
  totalEduc = 200;
  totalMisc = 100;
  showHome = false;
  showLiving = false;
  showTrans = false;
  showEduc = false;
  showMisc = false;

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
      this.store.select('category')
        .pipe(map(state => state.items))
        .subscribe(items => {
          this.categories = items;
        }),

      this.store.select('category')
        .pipe(map(state => state.isLoading))
        .subscribe(loading => {
          this.isLoading = loading;
          if (this.isLoading) { this.presentLoading(); }
        }),

        this.store.select('expenses')
        .pipe(map(state => state.items))
        .subscribe(items => {
          this.expenses = items;
        }),
    );

    this.totalExpenses =
      this.totalHome +
      this.totalLiving +
      this.totalTrans +
      this.totalEduc +
      this.totalMisc;
  }

  segmentChanged(e: any) { console.log(e); }

  toggleHome(e: any) { this.showHome = !this.showHome; }
  toggleLiving(e: any) { this.showLiving = !this.showLiving; }
  toggleTrans(e: any) { this.showTrans = !this.showTrans; }
  toggleEduc(e: any) { this.showEduc = !this.showEduc; }
  toggleMisc(e: any) { this.showMisc = !this.showMisc; }

  ngOnDestroy() { this.subs.unsubscribe(); }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ExpensePage,
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
