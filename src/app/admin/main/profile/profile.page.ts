import { UtilsService } from 'src/app/Auth/utils.service';
import { AuthentificateService } from 'src/app/Auth/authentificate.service';
import { Component, OnInit } from '@angular/core';
import { AddTrajetComponent } from 'src/app/shared/components/add-trajet/add-trajet.component';
import { User } from 'src/app/models/user.model';
import { Trajets } from 'src/app/models/trajets.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  trajets: any[] = []; 
  loading: boolean = false;

  constructor(
    public authentificateSvc: AuthentificateService,
    public utilsSvc : UtilsService,
  ) { }

  ngOnInit() {
  }

  user(): User{
    return this.authentificateSvc.getFromLocalStorage('user');
  }

  async takeImage(){
    let user = this.user();
    let path = `users/${user.uid}`;

      const loanding = await this.utilsSvc.loading();
      await loanding.present();
    

    const dataUrl = (await this.utilsSvc.takePicture('Profile image')).dataUrl;
    let imagePath = `${user.uid}/profile`;
   user.image = await this.authentificateSvc.uploadImage(imagePath, dataUrl);

   await this.authentificateSvc.updateDocument(path, {image: user.image}).then(res =>{

    this.authentificateSvc.saveInLocalStorage('user', user)

    this.utilsSvc.presentToast({
      message: 'image updated successfully!',
      duration: 2000,
      color: 'success',
      icon: 'checkmark-circle-outline'
    });
   
  }).catch(error => {

    this.utilsSvc.presentToast({
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
