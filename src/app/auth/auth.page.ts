import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

import { AppState } from '../store';
import { AuthService } from '../store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit, OnDestroy {
  private subs = new SubSink();
  form: FormGroup;
  isAuth: boolean;
  hasError: boolean;
  isLoading: boolean;
  isLoginMode = true;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.email
        ]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]
      })
    });

    this.subs.add(
      this.store.select('auth')
        .pipe(map(state => this.isAuth = state.isAuth))
        .subscribe(isAuth => {
          this.isAuth = isAuth;
          if (this.isAuth) { this.clear(); }
        }),
      this.store.select('auth')
        .pipe(map(state => state.authError))
        .subscribe(err => {
          this.hasError = !!err;
          if (this.hasError) { this.presentAlert(err.header, err.message); }
        }),
      this.store.select('auth')
        .pipe(map(state => state.loading))
        .subscribe(loading => {
          this.isLoading = loading;
          if (this.isLoading) { this.presentLoading(); }
        })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  submit() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    if (this.isLoginMode) {
      this.authService.login(email, password);
    } else {
      this.authService.signup(email, password);
    }
  }

  toggleLogin() {
    this.isLoginMode = !this.isLoginMode;
  }

  clear() {
    this.form.reset();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Ok',
          handler: () => { this.authService.clearError(); }
        }
      ]
    });

    await alert.present();
  }

}
