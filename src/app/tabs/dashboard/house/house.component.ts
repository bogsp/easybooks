import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Category, Types, Expense } from '../../../store/models';
import { ListModalPage } from '../../../modals';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
  @Input() category: Category;
  @Input() expenses: Expense[];
  curr = '';
  amount = 500;

  constructor(
    public modalController: ModalController
    ) { }

  ngOnInit() {}

  async presentModal(i: Types) {
    const modal = await this.modalController.create({
      component: ListModalPage,
      componentProps: {
        newIncome: true,
        type: i,
        expenses: this.expenses
      }
    });
    return await modal.present();
  }

}
