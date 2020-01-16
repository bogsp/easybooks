import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.page.html',
  styleUrls: ['./user-modal.page.scss'],
})
export class UserModalPage implements OnInit {
  @Input() newItem: boolean;
  form: FormGroup;

  constructor(
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
    });
  }

  submit() {
    if (this.form.valid) {
      if (this.newItem) {

      }
    }
  }

}
