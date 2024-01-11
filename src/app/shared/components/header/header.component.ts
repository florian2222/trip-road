import { UtilsService } from 'src/app/Auth/utils.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() title!: string;
  @Input() backButton!: string;
  @Input() showmenu!: boolean;
  @Input() isModal!: boolean;
  @Input() showMenu!: boolean;


  constructor(
    public utilsSvc: UtilsService,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.utilsSvc.desmissModal();
  }

}
