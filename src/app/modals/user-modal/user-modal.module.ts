import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UserModalPageRoutingModule } from './user-modal-routing.module';

import { UserModalPage } from './user-modal.page';

@NgModule({
  imports: [
    SharedModule,
    UserModalPageRoutingModule
  ],
  declarations: [UserModalPage]
})
export class UserModalPageModule {}
