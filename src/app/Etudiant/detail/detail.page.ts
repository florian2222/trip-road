import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailmodalPage } from '../detailmodal/detailmodal.page'; 
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MapsService } from 'src/app/provider/maps.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private currentPosition!: { latitude: number; longitude: number; };
   
  isOpen: boolean = false;
  constructor(
    private modalController : ModalController,
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController, 
    public mapsService : MapsService,
  ) { }

   async ngOnInit() {
     await this.open();

     this.mapsService.initMap('bingMap', 'Apw2frPNDQwenaJt-Qwt5nDdvYBw_wtG0r6PVoFydMmn_o4uMNjCN_4UMzJZow0w');

    // Récupère la position actuelle
    this.currentPosition = await this.mapsService.getPosition();

    // Centre la carte sur la position actuelle
    this.mapsService.centerMap(this.currentPosition);

    // Ajoute un marqueur à la position actuelle
    this.mapsService.addMarker(this.currentPosition, 'Ma position');

    

    // Calcul de l'itinéraire de la position actuelle à la destination
    this.calculateAndDisplayRoute();
   }


   getCurrentLocationAndCenterMap() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const currentLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
  
        console.log('Coordonnées actuelles:', currentLocation);
  
        // Centre la carte sur la position actuelle
        this.mapsService.centerMap(currentLocation);
  
        // Ajoute un marqueur sur la carte à la position actuelle
        this.mapsService.addMarker(new Microsoft.Maps.Location(currentLocation.latitude, currentLocation.longitude), 'Ma Position');
      },
      (error) => {
        console.error('Erreur lors de la récupération de la position :', error);
  
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error('Permission refusée par l\'utilisateur.');
            break;
          case error.POSITION_UNAVAILABLE:
            console.error('Informations de position indisponibles.');
            break;
          case error.TIMEOUT:
            console.error('La demande de géolocalisation a expiré.');
            break;
          default:
            console.error('Erreur inconnue lors de la récupération de la position.');
        }
      }
    );
  }
  
  
  
  calculateAndDisplayRoute(): void {
    const map = this.mapsService.getMap();
  
    if (map && Microsoft.Maps.Directions && Microsoft.Maps.Directions.DirectionsManager) {
      const directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
  
      const waypoint1 = new Microsoft.Maps.Directions.Waypoint({
        location: new Microsoft.Maps.Location(this.currentPosition.latitude, this.currentPosition.longitude)
      });
  
      const waypoint2 = new Microsoft.Maps.Directions.Waypoint({
        location: new Microsoft.Maps.Location(40.7128, -74.0060)
      });
  
      directionsManager.addWaypoint(waypoint1);
      directionsManager.addWaypoint(waypoint2);
  
      directionsManager.calculateDirections();
    } else {
      console.error('Erreur lors du calcul de l\'itinéraire : DirectionsManager non disponible.');
    }
  }
  
    





  async open(){
    const modal = await this.modalController.create({
      component:DetailmodalPage,
      initialBreakpoint:0.13,
      breakpoints:[0.13, 0.5],
      backdropDismiss: this.isOpen,
      backdropBreakpoint:0.2,
      cssClass:'detailModal'
    });
    return await modal.present();
  }

  Back() {
    
  }

}



