import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthentificateService } from 'src/app/Auth/authentificate.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/Auth/utils.service';
import { Trajets } from 'src/app/models/trajets.model';

@Component({
  selector: 'app-add-trajet',
  templateUrl: './add-trajet.component.html',
  styleUrls: ['./add-trajet.component.scss'],
})
export class AddTrajetComponent  implements OnInit {

  @Input() trajet: Trajets | undefined;

  form = new FormGroup({
    id: new FormControl(''),
    uidbus: new FormControl(''),
    name: new FormControl(''),
    to: new FormControl(''),
    color: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    heuredepart: new FormControl(''),
    duration: new FormControl(''),
    // image: new FormControl(''),
  })

  constructor(
    public authentificateService : AuthentificateService,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public loandingCtrl: LoadingController,
    private router: Router,
    public utils: UtilsService,
  ) {}

  user = {} as User;

  ngOnInit() {
    this.user = this.authentificateService.getFromLocalStorage('user');
    if (this.trajet) this.form.patchValue(this.trajet)
  }

  async takeImage(){
    const dataUrl = (await this.utils.takePicture('')).dataUrl;
    // this.form.controls.image.setValue(dataUrl!)
  }

  submit(){
    if (this.form.valid) {
      
      if(this.trajet) this.updateTraje();
      else this.createTraje();
    }
  }

  async createTraje() {

    if (this.form.valid) {

      let path = `users/${this.user.uid}/trajets`;

      const loanding = await this.utils.loading();
      await loanding.present();

      // let dataUrl = this.form.value.image;
      // let imagePath = `${this.user.uid}/${Date.now()}`;
      // let imageurl = await this.authentificateService.uploadImage(imagePath, dataUrl);
      // this.form.controls.image.setValue(imageurl)

      delete this.form.value.id
      await this.authentificateService.addDocument(path, this.form.value).then(res =>{

        this.utils.desmissModal({ success: true });

        this.utils.presentToast({
          message: 'save successfully!!',
          duration: 2000,
          color: 'success',
          icon: 'checkmark-circle-outline'
        });
       
      }).catch(error => {

        this.utils.presentToast({
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

  async updateTraje() {

      let path = `users/${this.user.uid}/trajets/${this.trajet!.id}`;

      const loanding = await this.utils.loading();
      await loanding.present();

      // if(this.form.value.image !== this.trajet.image){
      //   let dataUrl = this.form.value.image;
        // let imagePath = await this.authentificateService.getFilePath(this.trajet.image);
      //   let imageurl = await this.authentificateService.uploadImage(imagePath, dataUrl);
      //   this.form.controls.image.setValue(imageurl)
      // }
      

      delete this.form.value.id
      await this.authentificateService.updateDocument(path, this.form.value).then(res =>{

        this.utils.desmissModal({ success: true });

        this.utils.presentToast({
          message: 'save successfully!!',
          duration: 2000,
          color: 'success',
          icon: 'checkmark-circle-outline'
        });
       
      }).catch(error => {

        this.utils.presentToast({
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


