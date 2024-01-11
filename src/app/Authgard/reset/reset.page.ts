import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificateService } from 'src/app/Auth/authentificate.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
email:any;

  constructor(
    private router: Router,
    public authentificate: AuthentificateService
  ) { }

  ngOnInit() {
  }

  async resetPassword(){
    this.authentificate.reset(this.email).then(() =>{
      console.log('reset link sent')
      this.router.navigate(['/login'])
    }).catch((error) =>{
      console.log(error);
      
    })
  }

}
