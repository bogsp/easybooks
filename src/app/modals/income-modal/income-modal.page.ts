import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, NavParams, AlertController } from '@ionic/angular';

import { Types, Income } from '../../store/models';
import { IncomeService } from '../../store';

@Component({
  selector: 'app-income-modal',
  templateUrl: './income-modal.page.html',
  styleUrls: ['./income-modal.page.scss'],
})
export class IncomeModalPage implements OnInit {
  @Input() types: Types[];
  @Input() item: Income;
  form: FormGroup;
  isNew: boolean;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private incomeService: IncomeService,
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
      this.form.patchValue({
        date: this.item.date,
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
        type: this.form.value.type.name,
        typeid: this.form.value.type.id,
        amount: this.form.value.amount,
        description: this.form.value.description
      };
      if (this.isNew) {
        this.incomeService.add(this.item);
      } else {
        this.incomeService.update(this.item);
      }
      this.dismiss();
    } else { this.presentAlert(); }
  }

  getType(id: string) { return this.types.find(t => t.id === id); }

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
