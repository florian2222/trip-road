
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';import 
{ AuthentificateService } from 'src/app/Auth/authentificate.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/Auth/utils.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    mat: new FormControl('', [Validators.required]),
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

        await this.authentificateService.registerUser(this.form.value as User).then(res =>{
        this.authentificateService.updateUser();

        let uid = res.user!.uid;
        this.form.controls.uid.setValue(uid);

        this.setUserInfo(uid);
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

  async setUserInfo(uid: string) {
    if (this.form.valid) {
      const loanding = await this.load.loading();
      await loanding.present();

      let path = `users/${uid}`;
      delete this.form.value.password;

      this.authentificateService.setDocument(path, this.form.value).then(async res =>{

        this.authentificateService.saveInLocalStorage('user', this.form.value);
        this.authentificateService.routerlink('/auth');
        this.form.reset();

        this.load.presentToast({
          message: 'save successfully!!',
          duration: 2000,
          color: 'primary',
          icon: 'mail-outline'
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
        this.router.navigate(['login']) 
      })
    }
  }

  detail(){
    this.router.navigate(['/login']);
  }

}

      
    
    
    
  



  
