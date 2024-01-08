import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { AppStorageService } from '../services/app-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  value: any="";

  constructor(
    private storage: Storage,
    private appstorageservice: AppStorageService,
  ) {}


  async ngOnInit(){
    await this.storage.create();
  }

  async setValue(){
    await this.storage.set('name', 'Mr. Ionitron');
  }

  async getValue(){
    const name = await this.appstorageservice.get('name');
  }

  async removeValue(){
    await this.appstorageservice.remove('');
  }

  async clearValue(){
    await this.appstorageservice.clear();
  }

  async keyValue(){
    await this.appstorageservice.keys('');
  }


}
