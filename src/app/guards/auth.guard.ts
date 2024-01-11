import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificateService } from '../Auth/authentificate.service';
import { UtilsService } from '../Auth/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  firebaseSvc = inject(AuthentificateService);
  utilsSvc = inject(UtilsService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve)=> {

      let user = localStorage.getItem('user');
      
      this.firebaseSvc.getAuth().onAuthStateChanged((auth)=>{

        if(auth) {
          if(user) resolve(true);
        }else{
          this.firebaseSvc.routerlink('/auth');
          resolve(false);
        }
      })

    });
  }
  
}
