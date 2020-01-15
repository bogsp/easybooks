import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { LoadingController, ModalController } from '@ionic/angular';
import { SubSink } from 'subsink';

import { AppState } from '../../store';
import { Category, Types } from '../../store/models';
import { IncomeModalPage } from '../../modals';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit, OnDestroy {
  private subs = new SubSink();
  categories: Category[];
  category: Category;
  types: Types[];

  constructor(
    private store: Store<AppState>,
    public loadingController: LoadingController,
    public modalController: ModalController
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

  segmentChanged(e: any) { console.log(e.detail.value); }

  ngOnDestroy() { this.subs.unsubscribe(); }

  async presentModal() {
    const modal = await this.modalController.create({
      component: IncomeModalPage,
      componentProps: {
        newIncome: true,
        category: this.category
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
