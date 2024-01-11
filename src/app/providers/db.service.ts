import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private storage: Storage) { }

  async createDatabase(){
    await this.storage.create();
    await this.storage.defineDriver(cordovaSQLiteDriver);
  }

 
}
