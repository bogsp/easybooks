import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { LoadingController, ModalController } from '@ionic/angular';
import { SubSink } from 'subsink';

import {
  AppState,
  AuthService,
  ProfileService
} from '../../store';
import { Profile } from '../../store/models';
import { UserModalPage } from '../../modals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  private subs = new SubSink();
  item: Profile;
  email: string;
  new: boolean;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private profileService: ProfileService,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.subs.add(
      this.store.select('auth')
        .pipe(map(state => state.user.email))
        .subscribe(email => this.email = email),
      this.store.select('user')
        .pipe(map(state => state.item))
        .subscribe(item => {
          this.item = item;
          this.new = !item.firstname;
          if (this.new) { this.presentModal(); }
        }),
    );
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() { this.subs.unsubscribe(); }

  async presentModal() {
    const modal = await this.modalController.create({
      component: UserModalPage,
      componentProps: {
        newItem: this.new,
        item: this.item,
        email: this.email
      }
    });
    return await modal.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

}
