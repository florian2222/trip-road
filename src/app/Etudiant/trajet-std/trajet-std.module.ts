import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrajetStdPageRoutingModule } from './trajet-std-routing.module';

import { TrajetStdPage } from './trajet-std.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajetStdPageRoutingModule
  ],
  declarations: [TrajetStdPage]
})
export class TrajetStdPageModule {}
