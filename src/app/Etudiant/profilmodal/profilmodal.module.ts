import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilmodalPageRoutingModule } from './profilmodal-routing.module';

import { ProfilmodalPage } from './profilmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilmodalPageRoutingModule
  ],
  declarations: [ProfilmodalPage]
})
export class ProfilmodalPageModule {}
