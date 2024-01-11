import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeStdPage } from './home-std.page';

const routes: Routes = [
  {
    path: '',
    component: HomeStdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeStdPageRoutingModule {}
