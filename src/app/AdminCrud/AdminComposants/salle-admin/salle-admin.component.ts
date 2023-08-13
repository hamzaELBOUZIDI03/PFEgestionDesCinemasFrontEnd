
import { Component, OnInit } from '@angular/core';
import { salle } from '../../models/salle';
import { cinema } from '../../models/cinema';
import { SalleService } from 'src/app/services/AdminServices/salle.service';


@Component({
  selector: 'app-salle-admin',
  templateUrl: './salle-admin.component.html',
  styleUrls: ['./salle-admin.component.css']
})
export class SalleAdminComponent implements OnInit {
  salles: salle[] = [];
  selectedSalle: salle = {
    id: 0,
    name: '',
    nombrePlace: 0,
    cinema: {
      id:0,
      ville: {id:0}
  }

    }

  isAddMode: boolean = true;
  cinemas: cinema[] = [];

  constructor(private salleService: SalleService) { }

  ngOnInit(): void {
    this.loadsalles();
    this.loadcinemas();
  }

  loadsalles(): void {
    this.salleService.findAll().subscribe(
      data => {
        this.salles = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  loadcinemas(): void {
    this.salleService.findAllCinemaAdmin().subscribe(
      data => {
        this.cinemas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addOrUpdateSalle(): void {
    if (this.isAddMode) {
      this.salleService.persist(this.selectedSalle).subscribe(
        data => {
          this.salles.push(data);
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.salleService.update(this.selectedSalle).subscribe(
        data => {
          const index = this.salles.findIndex(s => s.id === data.id);
          if (index !== -1) {
            this.salles[index] = data;
          }
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteSalle(id: number): void {
    this.salleService.delete(id).subscribe(
      () => {
        this.salles = this.salles.filter(s => s.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }

  editSalle(salle: salle): void {
    this.selectedSalle = { ...salle };
    this.isAddMode = false;
  }

  clearForm(): void {
    this.selectedSalle = {
      id: 0,
    name: '',
    nombrePlace: 0,
    cinema: {
      id:0,
      ville: {id:0}
  }
    };
    this.isAddMode = true;
  }
}



