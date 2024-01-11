import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-trajetchauffeur',
  templateUrl: './trajetchauffeur.page.html',
  styleUrls: ['./trajetchauffeur.page.scss'],
})
export class TrajetchauffeurPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  detail(){
   
  }

}
 