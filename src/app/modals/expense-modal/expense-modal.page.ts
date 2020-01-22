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
  @Input() categories: Category[];
  @Input() item: Expense;
  form: FormGroup;
  types: Types[];
  isNew: boolean;
  id: string;

  constructor(
    private expenseService: ExpenseService,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    public alertController: AlertController
  ) {
    this.item = this.navParams.get('item');
    this.categories = this.navParams.get('categories');
    this.isNew = !this.item;
    if (!this.isNew) { this.getTypes(this.item.categoryId); }
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
      this.id = this.item.id;
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
      } else {
        this.item.id = this.id;
        this.expenseService.update(this.item);
      }
      this.dismiss();
    } else { this.presentAlert(); }
  }

  delete() {
    if (!this.isNew) {
      this.expenseService.delete(this.id);
      this.dismiss();
    }
  }

  getCategory(id: string) { return this.categories.find(c => c.id === id); }

  getType(id: string) { return this.types.find(t => t.id === id); }

  getTypes(e: any) {
    const catID = this.isNew ? e.detail.value.id : e;
    this.categories.map(i => { if (i.id === catID) { this.types = i.types; } });
  }

  dismiss() { this.modalCtrl.dismiss({ dismissed: true }); }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Incomplete Form',
      message: 'Please complete the required fields.',
      buttons: [{ text: 'Ok' }]
    });
    await alert.present();
  }

}
