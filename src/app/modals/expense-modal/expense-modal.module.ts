import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ExpenseModalPageRoutingModule } from './expense-modal-routing.module';

import { ExpenseModalPage } from './expense-modal.page';

@NgModule({
  imports: [
    SharedModule,
    ExpenseModalPageRoutingModule
  ],
  declarations: [ExpenseModalPage]
})
export class ExpenseModalPageModule {}
