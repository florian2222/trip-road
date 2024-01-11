import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificateService } from 'src/app/Auth/authentificate.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/Auth/utils.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
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
    const loanding = await this.load.loading();
    await loanding.present();
    if (this.form!.valid) {
      this.authentificateService.login(this.form.value as User).then(res =>{

        this.getUserInfo(res.user!.uid)
        console.log(res);
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

  async getUserInfo(uid: string) {
    if (this.form.valid) {
      const loanding = await this.load.loading();
      await loanding.present();

      let path = `users/${uid}`; 

      this.authentificateService.getDocument(path).then((user: User | any) =>{

        this.authentificateService.saveInLocalStorage('user', user);
        this.authentificateService.routerlink('/acceuil');
        this.form.reset();

        this.load.presentToast({
          message: `Bienvenue ${user.name}`,
          duration: 2000,
          color: 'primary',
          icon: 'person-circle-outline'
        });
        
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
