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
  @Input() item: Expense;
  form: FormGroup;
  types: Types[];
  isNew: boolean;

  constructor(
    private expenseService: ExpenseService,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    public alertController: AlertController
  ) {
    this.item = navParams.get('item');
    this.isNew = !this.item;
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
    if (!this.isNew) {
      console.log(this.item);
      this.form.patchValue({
        date: this.item.date,
        category: this.getCategory(this.item.categoryId),
        type: this.getType(this.item.typeid),
        amount: this.item.amount,
        description: this.item.description
      });
    }
  }

  submit() {
    if (this.form.valid) {
      this.item = {
        date: this.form.value.date,
        category: this.form.value.category.name,
        categoryId: this.form.value.category.id,
        type: this.form.value.type.name,
        typeid: this.form.value.type.id,
        amount: this.form.value.amount,
        description: this.form.value.description
      };
      if (this.isNew) {
        this.expenseService.add(this.item);
      } else { this.expenseService.update(this.item); }
      this.dismiss();
    } else { this.presentAlert(); }
  }

  getCategory(id: string) { return this.categories.find(c => c.id === id); }

  getType(id: string) { return this.types.find(t => t.id === id); }

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
