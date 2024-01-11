import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrajetchauffeurPageRoutingModule } from './trajetchauffeur-routing.module';

import { TrajetchauffeurPage } from './trajetchauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajetchauffeurPageRoutingModule
  ],
  declarations: [TrajetchauffeurPage]
})
export class TrajetchauffeurPageModule {}
