import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceuilPageRoutingModule } from './acceuil-routing.module';

import { AcceuilPage } from './acceuil.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilPageRoutingModule,
    SharedModule,
  ],
  declarations: [AcceuilPage]
})
export class AcceuilPageModule {}
