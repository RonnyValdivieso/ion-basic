import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {

  place: any = {};

  constructor(private route: ActivatedRoute, private navCtrl: NavController,
              private placesService: PlacesService) {
    this.route.params.subscribe(param => {
      this.place = Object.assign({}, param);
    });
  }

  ngOnInit() {
  }

  savePlace() {
    if (!this.place.id) {
      this.place.id = Date.now();
    }
    
    this.placesService.createPlace(this.place)
      .then((response) => {
        this.navCtrl.navigateRoot('/');
      });
  }

}
