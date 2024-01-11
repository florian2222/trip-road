import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomechauffeurPage } from './homechauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: HomechauffeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomechauffeurPageRoutingModule {}
