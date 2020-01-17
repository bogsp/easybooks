import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { UserModalPageModule } from '../../modals';

@NgModule({
  imports: [
    SharedModule,
    ProfilePageRoutingModule,
    UserModalPageModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
