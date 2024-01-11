import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabchauffeurPage } from './tabchauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: TabchauffeurPage,
    children : [
      {
        path: '',
        redirectTo: '/tabchauffeur/homechauffeur',
        pathMatch: 'full'
      },
      {
        path: 'homechauffeur',
        loadChildren: () => import('../../chaffeur/homechauffeur/homechauffeur.module').then( m => m.HomechauffeurPageModule)
      },
      {
        path: 'trajetchauffeur',
        loadChildren: () => import('../../chaffeur/trajetchauffeur/trajetchauffeur.module').then( m => m.TrajetchauffeurPageModule)
      },
      {
        path: 'detailetudiant',
        loadChildren: () => import('../../chaffeur/detailetudiant/detailetudiant.module').then( m => m.DetailetudiantPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabchauffeurPageRoutingModule {}
