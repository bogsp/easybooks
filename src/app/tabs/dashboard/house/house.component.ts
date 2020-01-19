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
  @Input() curr: string;

  constructor(
    public modalController: ModalController
    ) { }

  ngOnInit() {}

  getAmount(id: string) {
    return this.expenses
    .filter(exp => exp.categoryId === this.category.id)
    .filter(t => t.typeid === id)
    .reduce((a, e) => a + e.amount, 0);
  }

  async presentModal(i: Types) {
    const modal = await this.modalController.create({
      component: ListModalPage,
      componentProps: {
        category: this.category,
        type: i,
        curr: this.curr
      }
    });
    return await modal.present();
  }

}
