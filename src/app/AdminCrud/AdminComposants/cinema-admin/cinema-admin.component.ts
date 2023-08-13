// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cinema-admin',
//   templateUrl: './cinema-admin.component.html',
//   styleUrls: ['./cinema-admin.component.css']
// })
// export class CinemaAdminComponent {

// }


import { Component, OnInit } from '@angular/core';
import { cinema } from 'src/app/AdminCrud/models/cinema';
import { CinemaAdminService } from 'src/app/services/AdminServices/cinema-admin.service';
import { ville } from 'src/app/AdminCrud/models/ville';

@Component({
  selector: 'app-cinema-admin',
  templateUrl: './cinema-admin.component.html',
  styleUrls: ['./cinema-admin.component.css']
})
export class CinemaAdminComponent implements OnInit {
  cinemas: cinema[] = [];
  selectedCinema: cinema = {
    id: 0,
    name: '',
    longitude: 0,
    latitude: 0,
    altitude: 0,
    nombreSalles: 0,
    ville: {id:0}
  };
  isAddMode: boolean = true;
  villes: ville[] = [];

  constructor(private cinemaService: CinemaAdminService) { }

  ngOnInit(): void {
    this.loadCinemas();
    this.loadVilles();
  }

  loadCinemas(): void {
    this.cinemaService.findAll().subscribe(
      data => {
        this.cinemas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  loadVilles(): void {
    this.cinemaService.findAllville().subscribe(
      data => {
        this.villes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addOrUpdateCinema(): void {
    if (this.isAddMode) {
      this.cinemaService.persist(this.selectedCinema).subscribe(
        data => {
          this.cinemas.push(data);
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.cinemaService.update(this.selectedCinema).subscribe(
        data => {
          const index = this.cinemas.findIndex(c => c.id === data.id);
          if (index !== -1) {
            this.cinemas[index] = data;
          }
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteCinema(id: number): void {
    this.cinemaService.delete(id).subscribe(
      () => {
        this.cinemas = this.cinemas.filter(c => c.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }

  editCinema(cinema: cinema): void {
    this.selectedCinema = { ...cinema };
    this.isAddMode = false;
  }

  clearForm(): void {
    this.selectedCinema = {
      id: 0,
      name: '',
      longitude: 0,
      latitude: 0,
      altitude: 0,
      nombreSalles: 0,
      ville: {id:0}
    };
    this.isAddMode = true;
  }
}
