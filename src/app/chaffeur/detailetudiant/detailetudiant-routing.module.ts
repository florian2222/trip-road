import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailetudiantPage } from './detailetudiant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailetudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailetudiantPageRoutingModule {}
