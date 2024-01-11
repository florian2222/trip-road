import { UtilsService } from 'src/app/Auth/utils.service';
import { AuthentificateService } from 'src/app/Auth/authentificate.service';
import { Component, OnInit } from '@angular/core';
import { AddTrajetComponent } from 'src/app/shared/components/add-trajet/add-trajet.component';
import { User } from 'src/app/models/user.model';
import { Trajets } from 'src/app/models/trajets.model';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {


  trajets: any[] = []; 
  loading: boolean = false;

  constructor(
    public authentificateSvc: AuthentificateService,
    public utilsSvc : UtilsService,
  ) { }

  ngOnInit() {
    this.getTrajets();
  }

  user(): User{
    return this.authentificateSvc.getFromLocalStorage('user');
  }

  ionViewWillEnter(){
   this.getTrajets();
  }

  doResh(event: any){
    setTimeout(() =>{
      this.getTrajets();
      event.target.complete();
    }, 1000)
  }

  getTrajets(){
    let path = `users/${this.user().uid}/trajets`;  


    this.loading = true;

    let sub = this.authentificateSvc.getCollection(path).subscribe({
      next: (res: any) =>{
        console.log(res);
        this.trajets = res;

        this.loading = false;

        sub.unsubscribe(); 
      } 
    })
  }



   signOut(){
    this.authentificateSvc.signOut();
    this.utilsSvc.routerlink('/auth');
   }


   async updateT(trajet?: Trajets){
    let success = await this.utilsSvc.presentModal({
      component: AddTrajetComponent,
      cssClass: 'add-update-modal',
      componentProps: { trajet } 
    })

    if(success) this.getTrajets();
   
   }

   async confirmdelete(trajet: Trajets){
    this.utilsSvc.presentAlert({
        header: 'Delete journey',
        message: 'you are sure delete journey ?',
        mode: 'ios',
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Delete',
            handler: () =>{
              this.deleteTrajet(trajet)
            },
          }
        ]
    })
   }

   async deleteTrajet(trajet: Trajets) {

    let path = `users/${this.user().uid}/trajets/${trajet.id}`;

    const loanding = await this.utilsSvc.loading();
    await loanding.present();

    await this.authentificateSvc.deleteDocument(path).then(res =>{

      this.trajets = this.trajets.filter(p=> p.id !== trajet.id);
      this.utilsSvc.presentToast({
        message: 'delete successfully!!',
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
