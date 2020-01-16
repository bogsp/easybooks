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
  @Input() newIncome: boolean;
  @Input() types: Types[];
  @Input() income: Income;
  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private incomeService: IncomeService,
    public alertController: AlertController
  ) { }

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
  }

  submit() {
    console.log(this.form.value);
    if (this.form.valid) {
      if (this.newIncome) {
        this.incomeService.add({
          date: this.form.value.date,
          type: this.form.value.type.name,
          typeid: this.form.value.type.id,
          amount: this.form.value.amount,
          description: this.form.value.description,
          new: true
        });
      } else { console.log(this.form.value); }
      this.dismiss();
    } else { this.presentAlert(); }
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
