import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  pages = [
    {title: 'Home', url: 'acceuil', icon: 'home-outline'},
    {title: 'Profile', url: 'profile', icon: 'person-outline'},
  ]

  constructor() { }

  ngOnInit() {
  }


}
