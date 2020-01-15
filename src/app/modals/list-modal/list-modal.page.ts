import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { Types, Expense } from '../../store/models';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.page.html',
  styleUrls: ['./list-modal.page.scss'],
})
export class ListModalPage implements OnInit {
  @Input() type: Types;
  @Input() expenses: Expense[];
  curr = '';

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    if (this.expenses) {
      this.expenses.map((a, b) => +a.date < b );
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
