import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetetudiantPageRoutingModule } from './detetudiant-routing.module';

import { DetetudiantPage } from './detetudiant.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetetudiantPageRoutingModule,
    SharedModule,
  ],
  declarations: [DetetudiantPage]
})
export class DetetudiantPageModule {}
