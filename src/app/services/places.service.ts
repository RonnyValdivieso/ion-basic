import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private afDB: AngularFireDatabase) { }

  public getPlaces() {
    return this.afDB.list('/places');
  }
  public getPlace(id) {
    return this.afDB.object('/places/' + id);
  }
  public createPlace(place) {
    return this.afDB.database.ref('/places/' + place.id).set(place);
  }
  public editPlace(place) {
    return this.afDB.database.ref('/places/' + place.id).set(place);
  }
  public deletePlace(place) {
    return this.afDB.database.ref('/places/' + place.id).remove();
  }
}
