import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalprofilPageRoutingModule } from './modalprofil-routing.module';

import { ModalprofilPage } from './modalprofil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalprofilPageRoutingModule
  ],
  declarations: [ModalprofilPage]
})
export class ModalprofilPageModule {}
