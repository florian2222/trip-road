import { Component, OnInit } from '@angular/core';
import { ProfilmodalPage } from '../profilmodal/profilmodal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-std',
  templateUrl: './home-std.page.html',
  styleUrls: ['./home-std.page.scss'],
})
export class HomeStdPage implements OnInit {

  isModalOpen = false;

  constructor(
    private modalController : ModalController,
  ) { }

  ngOnInit() {
  }

  async openShare(){
    const modal = await this.modalController.create({
      component:ProfilmodalPage,
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
