import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';

import { ProfileService } from '../../store';
import { Profile } from '../../store/models';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.page.html',
  styleUrls: ['./user-modal.page.scss'],
})
export class UserModalPage implements OnInit {
  @Input() newItem: boolean;
  @Input() item: Profile;
  @Input() email: string;
  form: FormGroup;

  constructor(
    private profileService: ProfileService,
    private modalCtrl: ModalController,
    public alertController: AlertController
  ) { }

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
      picture: new FormControl(null, {
        updateOn: 'blur',
        validators: []
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
    if (!this.newItem) {
      this.form.patchValue({
        firstname: this.item.firstname,
        lastname: this.item.lastname,
        picture: this.item.img,
        currency: this.item.currency,
        listview: this.item.listview,
      });
    }
  }

  submit() {
    // img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    if (this.form.valid) {
      const prof = {
        id: this.item.id,
        firstname: this.form.value.firstname,
        lastname: this.form.value.lastname,
        email: this.email,
        img: this.form.value.picture,
        currency: this.form.value.currency,
        listview: this.form.value.listview,
        valid: true
      };
      if (this.newItem) {
        this.profileService.addCustom(prof);
      } else { this.profileService.update(prof); }
      this.dismiss();
    }
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
