import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeStdPageRoutingModule } from './home-std-routing.module';

import { HomeStdPage } from './home-std.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeStdPageRoutingModule
  ],
  declarations: [HomeStdPage]
})
export class HomeStdPageModule {}
