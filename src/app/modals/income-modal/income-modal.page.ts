import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

import { Category, Types, Income } from '../../store/models';

@Component({
  selector: 'app-income-modal',
  templateUrl: './income-modal.page.html',
  styleUrls: ['./income-modal.page.scss'],
})
export class IncomeModalPage implements OnInit {
  @Input() newIncome: boolean;
  @Input() category: Category;
  @Input() income: Income;
  form: FormGroup;
  types: Types[];

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    if (this.category) { this.types = this.category.types; }

    this.form = new FormGroup({
      date: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }),
      type: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }),
      amount: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      })
    });
  }

  submit() {
    if (this.newIncome) {}
   }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
