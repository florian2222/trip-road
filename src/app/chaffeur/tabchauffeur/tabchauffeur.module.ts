import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabchauffeurPageRoutingModule } from './tabchauffeur-routing.module';

import { TabchauffeurPage } from './tabchauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabchauffeurPageRoutingModule
  ],
  declarations: [TabchauffeurPage]
})
export class TabchauffeurPageModule {}
