
import { Component, OnInit } from '@angular/core';
import { salle } from '../../models/salle';
import { SalleService } from 'src/app/services/AdminServices/salle.service';
import { projection } from '../../models/projection';
import { film } from '../../models/film';
import { seance } from '../../models/seance';
import { ProjectionService } from 'src/app/services/AdminServices/projection.service';


@Component({
  selector: 'app-projection-admin',
  templateUrl: './projection-admin.component.html',
  styleUrls: ['./projection-admin.component.css']
})
export class ProjectionAdminComponent implements OnInit {
  projections: projection[] = [];
  selectedProjection: projection = {
    id: 0,
    dateProjection: new Date(),
    prix:0,
    salle: {

      id: 0,
      name: '',
      nombrePlace: 0,
      cinema: {
        id:0,
        ville: {id:0}
    }
  },film:{
    id: 0,
    titre: '',
    description: '',
    realisateur: '',
    dateSortie: new Date(),
    duree: 0,
    photo: '',
    categorieFilm: {id:0}
  },seance:{

    id: 0,
    heureDebut: ''
  }

    }

  isAddMode: boolean = true;
  salles: salle[] = [];
  films: film[] = [];
  seances: seance[] = [];



  constructor(private projectionService: ProjectionService) { }

  ngOnInit(): void {
    this.loadprojections();
    this.loadsalles();
    this.loadfilms();
    this.loadseances();



  }

  loadprojections(): void {
    this.projectionService.findAll().subscribe(
      data => {
        this.projections = data;
      },
      error => {
        console.log(error);
      }
    );
  }



  loadsalles(): void {
    this.projectionService.findAllsalle().subscribe(
      data => {
        this.salles = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  loadfilms(): void {
    this.projectionService.findAllfilm().subscribe(
      data => {
        this.films = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  loadseances(): void {
    this.projectionService.findAllseance().subscribe(
      data => {
        this.seances = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addOrUpdateProjection(): void {
    if (this.isAddMode) {
      this.projectionService.persist(this.selectedProjection).subscribe(
        data => {
          this.projections.push(data);
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.projectionService.update(this.selectedProjection).subscribe(
        data => {
          const index = this.projections.findIndex(pj => pj.id === data.id);
          if (index !== -1) {
            this.projections[index] = data;
          }
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteProjection(id: number): void {
    this.projectionService.delete(id).subscribe(
      () => {
        this.projections = this.projections.filter(pj => pj.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }

  editProjection(projection: projection): void {
    this.selectedProjection = { ...projection };
    this.isAddMode = false;
  }

  clearForm(): void {
    this.selectedProjection = {
      id: 0,
      dateProjection: new Date(),
      prix:0,
      salle: {

        id: 0,
        name: '',
        nombrePlace: 0,
        cinema: {
          id:0,
          ville: {id:0}
      }
    },film:{
      id: 0,
      titre: '',
      description: '',
      realisateur: '',
      dateSortie: new Date(),
      duree: 0,
      photo: '',
      categorieFilm: {id:0}
    },seance:{

      id: 0,
      heureDebut: ''
    }
    };
    this.isAddMode = true;
  }
}




