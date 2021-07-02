import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrPagePage } from './hr-page.page';

const routes: Routes = [
  {
    path: '',
    component: HrPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrPagePageRoutingModule {}
