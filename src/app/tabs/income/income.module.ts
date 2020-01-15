import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { IncomePageRoutingModule } from './income-routing.module';
import { IncomeModalPageModule } from '../../modals';

import { IncomePage } from './income.page';

@NgModule({
  imports: [
    SharedModule,
    IncomePageRoutingModule,
    IncomeModalPageModule
  ],
  declarations: [IncomePage]
})
export class IncomePageModule {}
