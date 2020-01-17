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
  @Input() curr: string;
  items: Expense[];

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    if (this.expenses) {
      this.items = this.expenses
        .filter(t => t.typeid === this.type.id);
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
