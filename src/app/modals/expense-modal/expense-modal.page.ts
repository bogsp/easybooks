import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Category, Types, Expense } from '../../store/models';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.page.html',
  styleUrls: ['./expense-modal.page.scss'],
})
export class ExpenseModalPage implements OnInit {
  @Input() newExpense: boolean;
  @Input() categories: Category[];
  @Input() expense: Expense[];
  form: FormGroup;
  types: Types[];

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    // componentProps can also be accessed at construction time using NavParams
    // console.log(navParams.get('categories'));
  }

  ngOnInit() {
    this.form = new FormGroup({
      date: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }),
      category: new FormControl(null, {
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

  submit() { }

  getTypes(item: Category) {
    this.categories.map(i => {
      if (i === item) { this.types = i.types; }
    });
    console.log(this.types);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
