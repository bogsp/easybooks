import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListModalPageRoutingModule } from './list-modal-routing.module';

import { ListModalPage } from './list-modal.page';

@NgModule({
  imports: [
    SharedModule,
    ListModalPageRoutingModule
  ],
  declarations: [ListModalPage]
})
export class ListModalPageModule {}
