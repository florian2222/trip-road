import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { MapsService } from './provider/maps.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import  { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    IonicStorageModule.forRoot({
      name: "X-line",
      driverOrder: [cordovaSQLiteDriver._driver, Drivers.IndexedDB ]
    }),
    HttpClientModule, AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MapsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
