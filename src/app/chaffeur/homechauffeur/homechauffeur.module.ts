import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomechauffeurPageRoutingModule } from './homechauffeur-routing.module';

import { HomechauffeurPage } from './homechauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomechauffeurPageRoutingModule
  ],
  declarations: [HomechauffeurPage]
})
export class HomechauffeurPageModule {}
