import { UtilsService } from 'src/app/Auth/utils.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificateService } from 'src/app/Auth/authentificate.service';

@Component({
  selector: 'app-profilmodal',
  templateUrl: './profilmodal.page.html',
  styleUrls: ['./profilmodal.page.scss'],
})
export class ProfilmodalPage implements OnInit {
  user: any;

  constructor(
    private router: Router,
    public authentificate: AuthentificateService,
    public utilsSvc: UtilsService,
  ) {
    this.user = authentificate.getProfile()
  }

  ngOnInit() {
  }

  toggleTheme(event: { detail: { checked: any; }; }){
    // if(event.detail.checked){
    //   document.body.setAttribute('color-theme','light')
    // }else{
    //   document.body.setAttribute('color-theme','dark')
    // }
  }

  async logout(){
    this.authentificate.signOut().then(() =>{
      this.router.navigate(['/landing'])
    }).catch((error) =>{
      console.log(error);

    })
  }

  dismiss(){
    this.utilsSvc.dismissModal();
  }

} 
