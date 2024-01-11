import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, AlertOptions, LoadingController, ModalController, ModalOptions, NavController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


    loadingCtrl = inject(LoadingController);
    toastgCtrl = inject(ToastController);
    router = inject(Router);
    modalCrtl = inject(ModalController);
    alertCtrl = inject(AlertController)

 

  async takePicture (promptLabelHeader: string){
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader,
      promptLabelPhoto: 'Selection one image', 
      promptLabelPicture: 'Take a photo'
    });

    
  };

  async presentAlert(opts?: AlertOptions){
    const alert = await this.alertCtrl.create(opts);
    await alert.present();
  }


  loading() {
  return this.loadingCtrl.create({spinner: 'crescent'})
  }

  async presentToast(opts?: ToastOptions) {
  const toast = await this.toastgCtrl.create(opts);
  toast.present();
  }

  routerlink(url: string) {
  return this.router.navigateByUrl(url);
  }

  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCrtl.create(opts);
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if(data) return data;
  }

  dismissModal(){
    return this.modalCrtl.dismiss();
  }
  
  desmissModal(data?: any){
    return this.modalCrtl.dismiss(data);
  }

}
