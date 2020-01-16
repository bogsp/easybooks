import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Category, Types, Expense } from '../../store/models';
import { ExpenseService } from '../../store';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.page.html',
  styleUrls: ['./expense-modal.page.scss'],
})
export class ExpenseModalPage implements OnInit {
  @Input() newExpense: boolean;
  @Input() categories: Category[];
  @Input() expense: Expense;
  form: FormGroup;
  types: Types[];

  constructor(
    private expenseService: ExpenseService,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    public alertController: AlertController
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

  submit() {
    if (this.form.valid) {
      if (this.newExpense) {
        this.expenseService.add({
          date: this.form.value.date,
          category: this.form.value.category.name,
          categoryId: this.form.value.category.id,
          type: this.form.value.type.name,
          typeid: this.form.value.type.id,
          amount: this.form.value.amount,
          description: this.form.value.description,
          new: true
        });
      } else { console.log(this.expense); }
      this.dismiss();
    } else { this.presentAlert(); }
  }

  getTypes(e: any) {
    this.categories.map(i => {
      if (i === e.detail.value) { this.types = i.types; }
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Incomplete Form',
      message: 'Please complete the required fields.',
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });

    await alert.present();
  }

}
