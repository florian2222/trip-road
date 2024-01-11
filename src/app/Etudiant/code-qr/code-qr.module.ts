import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeQrPageRoutingModule } from './code-qr-routing.module';

import { CodeQrPage } from './code-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeQrPageRoutingModule
  ],
  declarations: [CodeQrPage]
})
export class CodeQrPageModule {}
