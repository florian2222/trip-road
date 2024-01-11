import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children : [
      {
        path: '',
        redirectTo: '/tabs/home-std',
        pathMatch: 'full'
      },
      {
        path: 'home-std',
        loadChildren: () => import('../home-std/home-std.module').then( m => m.HomeStdPageModule)
      },
      {
        path: 'trajet-std',
        loadChildren: () => import('../trajet-std/trajet-std.module').then( m => m.TrajetStdPageModule)
      },
      {
        path: 'code-qr',
        loadChildren: () => import('../code-qr/code-qr.module').then( m => m.CodeQrPageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
