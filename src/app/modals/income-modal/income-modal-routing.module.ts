import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeModalPage } from './income-modal.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeModalPageRoutingModule {}
