import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrajetStdPage } from './trajet-std.page';

const routes: Routes = [
  {
    path: '',
    component: TrajetStdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrajetStdPageRoutingModule {}
