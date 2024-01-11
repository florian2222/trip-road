import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalprofilPage } from '../modalprofil/modalprofil.page';

@Component({
  selector: 'app-homechauffeur',
  templateUrl: './homechauffeur.page.html',
  styleUrls: ['./homechauffeur.page.scss'],
})
export class HomechauffeurPage implements OnInit {

  isModalOpen = false;
modal: any;
  

  constructor(
    private modalController : ModalController,
  ) { }

  ngOnInit() {
  }

  async openShare(){
    const modal = await this.modalController.create({
      component:ModalprofilPage,
      initialBreakpoint:0.6,
      breakpoints:[0,0.6],
      cssClass:'shareModal'
    });
    return await modal.present(); 
  }

 

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


} 
