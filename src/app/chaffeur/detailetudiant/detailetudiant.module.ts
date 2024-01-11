import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailetudiantPageRoutingModule } from './detailetudiant-routing.module';

import { DetailetudiantPage } from './detailetudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailetudiantPageRoutingModule
  ],
  declarations: [DetailetudiantPage]
})
export class DetailetudiantPageModule {}
