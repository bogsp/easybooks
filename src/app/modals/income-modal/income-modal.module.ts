import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { IncomeModalPageRoutingModule } from './income-modal-routing.module';

import { IncomeModalPage } from './income-modal.page';

@NgModule({
  imports: [
    SharedModule,
    IncomeModalPageRoutingModule
  ],
  declarations: [IncomeModalPage]
})
export class IncomeModalPageModule {}
