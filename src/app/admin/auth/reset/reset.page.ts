import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificateService } from 'src/app/Auth/authentificate.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/Auth/utils.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(
    public authentificateService : AuthentificateService,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public loandingCtrl: LoadingController,
    private router: Router,
    public load: UtilsService,
  ) {}

  ngOnInit() {
  }

  async submit() {
    
    if (this.form.valid) {
      const loanding = await this.load.loading();
      await loanding.present();

      this.authentificateService.reset(this.form.value.email!).then(res =>{

        this.load.presentToast({
          message: 'email sent successfully!!',
          duration: 2000,
          color: 'primary',
          icon: 'mail-outline'
        });

        this.authentificateService.routerlink('/auth');
        this.form.reset();

      }).catch(error => {

        this.load.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          icon: 'alert-circle-outline'
        });
        
        console.log(error);
      }).finally(() =>{
        loanding.dismiss();
      })
    }
  }

  

}

