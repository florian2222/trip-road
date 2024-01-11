import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalprofilPage } from './modalprofil.page';

const routes: Routes = [
  {
    path: '',
    component: ModalprofilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalprofilPageRoutingModule {}
