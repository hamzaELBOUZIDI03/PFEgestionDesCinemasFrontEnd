// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-film-admin',
//   templateUrl: './film-admin.component.html',
//   styleUrls: ['./film-admin.component.css']
// })
// export class FilmAdminComponent {

// }





import { Component, OnInit } from '@angular/core';
import { film } from '../../models/film';
import { categorieFilm } from '../../models/categorieFilm';
import { FilmService } from 'src/app/services/AdminServices/film.service';

@Component({
  selector: 'app-film-admin',
  templateUrl: './film-admin.component.html',
  styleUrls: ['./film-admin.component.css']
})
export class FilmAdminComponent implements OnInit {
  films: film[] = [];
  selectedFilm: film = {
    id: 0,
    titre: '',
    description: '',
    realisateur: '',
    dateSortie: new Date(),
    duree: 0,
    photo: '',
    categorieFilm: {id:0}
  };
  isAddMode: boolean = true;
  categorieFilms: categorieFilm[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.loadfilms();
    this.loadcategorieFilms();
  }

  loadfilms(): void {
    this.filmService.findAll().subscribe(
      data => {
        this.films = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  loadcategorieFilms(): void {
    this.filmService.findAllcategorieFilm().subscribe(
      data => {
        this.categorieFilms = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addOrUpdateFilm(): void {
    if (this.isAddMode) {
      this.filmService.persist(this.selectedFilm).subscribe(
        data => {
          this.films.push(data);
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.filmService.update(this.selectedFilm).subscribe(
        data => {
          const index = this.films.findIndex(f => f.id === data.id);
          if (index !== -1) {
            this.films[index] = data;
          }
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteFilm(id: number): void {
    this.filmService.delete(id).subscribe(
      () => {
        this.films = this.films.filter(f => f.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }

  editFilm(film: film): void {
    this.selectedFilm = { ...film };
    this.isAddMode = false;
  }

  clearForm(): void {
    this.selectedFilm = {
      id: 0,
      titre: '',
      description: '',
      realisateur: '',
      dateSortie: new Date(),
      duree: 0,
      photo: '',
      categorieFilm: {id:0}
    };
    this.isAddMode = true;
  }
}

