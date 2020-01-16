import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Category, Types, Expense } from '../../../store/models';
import { ListModalPage } from '../../../modals';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.scss'],
})
export class EducComponent implements OnInit {
  @Input() category: Category;
  @Input() expenses: Expense[];
  curr = '';

  constructor(
    public modalController: ModalController
    ) { }

  ngOnInit() {}

  filterArr(id: string) {
    return this.expenses
    .filter(exp => exp.categoryId === this.category.id)
    .filter(t => t.typeid === id)
    .reduce((a, e) => a + e.amount, 0);
  }

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
