import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilmodalPage } from './profilmodal.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilmodalPageRoutingModule {}
