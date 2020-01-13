import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HouseComponent } from './house/house.component';
import { LivingComponent } from './living/living.component';
import { TransComponent } from './trans/trans.component';
import { EducComponent } from './educ/educ.component';
import { MiscComponent } from './misc/misc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
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
