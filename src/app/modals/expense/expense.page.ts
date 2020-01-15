import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category, Types } from 'src/app/store/models';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {
  @Input() newExpense: boolean;
  @Input() categories: Category[];
  form: FormGroup;
  types: Types[];

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    // componentProps can also be accessed at construction time using NavParams
    // console.log(navParams.get('firstName'));
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
