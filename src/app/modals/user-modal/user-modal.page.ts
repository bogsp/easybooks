import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, AlertController, NavParams, LoadingController } from '@ionic/angular';

import { ProfileService, AuthService } from '../../store';
import { Profile } from '../../store/models';
import { currencies } from './currencies';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.page.html',
  styleUrls: ['./user-modal.page.scss'],
})
export class UserModalPage implements OnInit {
  @Input() isNew: boolean;
  @Input() item: Profile;
  @Input() email: string;
  form: FormGroup;
  currencies = currencies;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.item = this.navParams.get('item');
    this.isNew = !this.item;
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }),
      lastname: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }),
      currency: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
      listview: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
    });
    if (!this.isNew) {
      this.form.patchValue({
        firstname: this.item.firstname,
        lastname: this.item.lastname,
        currency: this.item.currency,
        listview: this.item.listview,
      });
    }
  }

  submit() {
    if (this.form.valid) {
      const prof = {
        id: this.authService.user.id,
        firstname: this.form.value.firstname,
        lastname: this.form.value.lastname,
        email: this.authService.user.email,
        currency: this.form.value.currency,
        valid: true
      } as Profile;
      if (this.isNew && this.item === null) {
        prof.listview = 'All';
        this.profileService.addCustom(prof);
      } else {
        prof.listview = this.form.value.listview;
        this.profileService.update(prof);
      }
      this.presentLoading();
      this.dismiss();
    }
  }

  dismiss() { this.modalCtrl.dismiss({ dismissed: true }); }

  async presentLoading() {
    const loading = await this.loadingController.create({ duration: 2000 });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Incomplete Form',
      message: 'Please complete the required fields.',
      buttons: [{ text: 'Ok' }]
    });
    await alert.present();
  }

}
