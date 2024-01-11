import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trajet-std',
  templateUrl: './trajet-std.page.html',
  styleUrls: ['./trajet-std.page.scss'],
})
export class TrajetStdPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  detail(){
    this.router.navigate(['/detail']); 
  }
}
