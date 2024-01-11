import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'auth',
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
  {
    path: 'auth',
    loadChildren: () => import('./admin/auth/auth.module').then( m => m.AuthPageModule), canActivate:[NoAuthGuard]
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./admin/main/acceuil/acceuil.module').then( m => m.AcceuilPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'profile', 
    loadChildren: () => import('./admin/main/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./admin/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'detetudiant',
    loadChildren: () => import('./admin/main/detetudiant/detetudiant.module').then( m => m.DetetudiantPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
