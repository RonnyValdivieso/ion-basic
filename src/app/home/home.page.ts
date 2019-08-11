import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  places: any = [];

  constructor(private router: Router, private placesService: PlacesService) {
    this.placesService.getPlaces().valueChanges()
      .subscribe((dbPlaces) => {
        this.places = dbPlaces;
      })
  }

  goToPlace(name) {
    let params: NavigationExtras = {queryParams: {name:name}};
    this.router.navigate(['/tabs/home/place'], params);
  }

  goToDetailView() {
    this.router.navigate(['/tabs/home/place'], {});
  }

  goToPlaceDetail(place) {
    console.log(typeof(place))
    this.router.navigate(['/tabs/home/place', place]);
  }

  deletePlace(place) {
    if (confirm('¿Are you sure to delete this place?')) {
      return this.placesService.deletePlace(place).then(() => {
        alert("The place was deleted successfully");
      });
    }
  }

}
