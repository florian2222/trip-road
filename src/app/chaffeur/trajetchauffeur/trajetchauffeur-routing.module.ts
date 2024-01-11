import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrajetchauffeurPage } from './trajetchauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: TrajetchauffeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrajetchauffeurPageRoutingModule {}
