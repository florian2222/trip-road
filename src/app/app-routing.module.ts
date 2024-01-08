import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Etudiant/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home-std',
    loadChildren: () => import('./Etudiant/home-std/home-std.module').then( m => m.HomeStdPageModule)
  },
  {
    path: 'trajet-std',
    loadChildren: () => import('./Etudiant/trajet-std/trajet-std.module').then( m => m.TrajetStdPageModule)
  },
  {
    path: 'code-qr',
    loadChildren: () => import('./Etudiant/code-qr/code-qr.module').then( m => m.CodeQrPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./Etudiant/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'profilmodal',
    loadChildren: () => import('./Etudiant/profilmodal/profilmodal.module').then( m => m.ProfilmodalPageModule)
  },
  {
    path: 'detailmodal',
    loadChildren: () => import('./Etudiant/detailmodal/detailmodal.module').then( m => m.DetailmodalPageModule)
  },
  {
    path: 'tabchauffeur',
    loadChildren: () => import('./chaffeur/tabchauffeur/tabchauffeur.module').then( m => m.TabchauffeurPageModule)
  },
  {
    path: 'homechauffeur',
    loadChildren: () => import('./chaffeur/homechauffeur/homechauffeur.module').then( m => m.HomechauffeurPageModule)
  },
  {
    path: 'trajetchauffeur',
    loadChildren: () => import('./chaffeur/trajetchauffeur/trajetchauffeur.module').then( m => m.TrajetchauffeurPageModule)
  },
  {
    path: 'detailetudiant',
    loadChildren: () => import('./chaffeur/detailetudiant/detailetudiant.module').then( m => m.DetailetudiantPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Authgard/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Authgard/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'modalprofil',
    loadChildren: () => import('./chaffeur/modalprofil/modalprofil.module').then( m => m.ModalprofilPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./Authgard/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./Authgard/reset/reset.module').then( m => m.ResetPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
