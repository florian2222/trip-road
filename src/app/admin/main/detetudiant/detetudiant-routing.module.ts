import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetetudiantPage } from './detetudiant.page';

const routes: Routes = [
  {
    path: '',
    component: DetetudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetetudiantPageRoutingModule {}
