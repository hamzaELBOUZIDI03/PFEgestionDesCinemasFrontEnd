// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-place-admin',
//   templateUrl: './place-admin.component.html',
//   styleUrls: ['./place-admin.component.css']
// })
// export class PlaceAdminComponent {

// }

import { Component, OnInit } from '@angular/core';
import { salle } from '../../models/salle';
import { place } from '../../models/place';
import { PlaceService } from 'src/app/services/AdminServices/place.service';


@Component({
  selector: 'app-place-admin',
  templateUrl: './place-admin.component.html',
  styleUrls: ['./place-admin.component.css']
})
export class PlaceAdminComponent implements OnInit {
  places: place[] = [];
  selectedPlace: place = {
    id: 0,
    numero: 0,
    longitude: 0,
    latitude: 0,
    altitude: 0,
    salle:{
      id:0,
      cinema: {
        id:0,
        ville: {id:0}
    }


    }


    }

  isAddMode: boolean = true;
  salles: salle[] = [];

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.loadplaces();
    this.loadsalles();
  }

  loadplaces(): void {
    this.placeService.findAll().subscribe(
      data => {
        this.places = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  loadsalles(): void {
    this.placeService.findAllsalle().subscribe(
      data => {
        this.salles = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addOrUpdatePlace(): void {
    if (this.isAddMode) {
      this.placeService.persist(this.selectedPlace).subscribe(
        data => {
          this.places.push(data);
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.placeService.update(this.selectedPlace).subscribe(
        data => {
          const index = this.places.findIndex(p => p.id === data.id);
          if (index !== -1) {
            this.places[index] = data;
          }
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deletePlace(id: number): void {
    this.placeService.delete(id).subscribe(
      () => {
        this.places = this.places.filter(p => p.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }

  editPlace(place: place): void {
    this.selectedPlace = { ...place };
    this.isAddMode = false;
  }

  clearForm(): void {
    this.selectedPlace = {
      id: 0,
      numero: 0,
      longitude: 0,
      latitude: 0,
      altitude: 0,
      salle:{
        id:0,
        cinema: {
          id:0,
          ville: {id:0}
      }


      }
    };
    this.isAddMode = true;
  }
}




