import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { LoadingController, ModalController } from '@ionic/angular';
import { SubSink } from 'subsink';

import { AppState, IncomeService } from '../../store';
import { Types, Income } from '../../store/models';
import { IncomeModalPage } from '../../modals';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit, OnDestroy {
  private subs = new SubSink();
  item: Income;
  items: Income[];
  itemId: string;
  isEditing: boolean;
  isLoading: boolean;
  total: number;
  types: Types[];
  error: { header: string, message: string };
  curr: string;

  constructor(
    private store: Store<AppState>,
    private incomeService: IncomeService,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.subs.add(
      this.store
        .select('user')
        .pipe(map(state => state.curency))
        .subscribe(curency => { this.curr = curency; }),

      this.store
        .select('income')
        .pipe(map(state => state.types))
        .subscribe(types => { this.types = types; }),

      this.store
        .select('income')
        .pipe(map(state => state.items))
        .subscribe(items => { this.items = items; }),

      this.store
        .select('expenses')
        .pipe(map(state => state.total))
        .subscribe(total => { this.total = total; }),
    );
  }

  delete(i: string) { this.incomeService.delete(i); }

  getAmount(id?: string) {
    if (id) {
      return this.items
        .filter(exp => exp.typeid === id)
        .reduce((a, e) => a + e.amount, 0);
    }
    return this.items.reduce((a, e) => a + e.amount, 0);
  }

  filterDates(event: any) { console.log(event.detail.value); }

  filterArr(id: string) { return this.items.filter(exp => exp.typeid === id); }

  ngOnDestroy() { this.subs.unsubscribe(); }

  refresh(event: any) {
    // this.incomeService.fetchAll();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async presentModal(i?: Income) {
    const modal = await this.modalController.create({
      component: IncomeModalPage,
      componentProps: {
        item: i,
        types: this.types
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
