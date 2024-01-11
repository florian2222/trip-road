import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificateService } from 'src/app/Auth/authentificate.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    public formbuilder: FormBuilder,
    public loandingCtrl: LoadingController,
    public authentificate: AuthentificateService
  ) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
      ]],
      password: ['',[
        Validators.required,
        Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
      ]]
    })
  }

  get errorControl(){
    return this.loginForm!.controls;
  }

  async login(){
    const loanding = await this.loandingCtrl.create();
    await loanding.present();
    if(this.loginForm!.valid){
      const user = await this.authentificate.login(this.loginForm.value as User).catch((error) =>{
        console.log(error);
        loanding.dismiss();
      });

      if(user){
        loanding.dismiss();
        this.router.navigate(['tabs/home-std'])
      }
    }
  }


  detail(){
    this.router.navigate(['/register']); 
  }
}
