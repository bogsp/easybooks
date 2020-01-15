import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { ExpenseModalPageModule } from '../../modals';

import { DashboardPage } from './dashboard.page';
import { HouseComponent } from './house/house.component';
import { LivingComponent } from './living/living.component';
import { TransComponent } from './trans/trans.component';
import { EducComponent } from './educ/educ.component';
import { MiscComponent } from './misc/misc.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardPageRoutingModule,
    ExpenseModalPageModule
  ],
  declarations: [
    DashboardPage,
    HouseComponent,
    LivingComponent,
    TransComponent,
    EducComponent,
    MiscComponent
  ]
})
export class DashboardPageModule {}
