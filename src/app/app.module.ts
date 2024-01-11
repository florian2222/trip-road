import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { MapsService } from './provider/maps.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import  { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({mode : 'md'}), 
    IonicStorageModule.forRoot({
      name: "X-line",
      driverOrder: [cordovaSQLiteDriver._driver, Drivers.IndexedDB ]
    }),
    HttpClientModule, AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"x-line-ec70d","appId":"1:350071516628:web:e13b058fff4718aaf53a41","storageBucket":"x-line-ec70d.appspot.com","apiKey":"AIzaSyBYiPDhQXmi1mi_Dk3BbhP-MuEpDf0udSE","authDomain":"x-line-ec70d.firebaseapp.com","messagingSenderId":"350071516628","measurementId":"G-ZC526XFN1P"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
    AngularFireModule,AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebaseConfig),ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MapsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
