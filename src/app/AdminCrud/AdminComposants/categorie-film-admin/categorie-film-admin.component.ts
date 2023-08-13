import { Component, OnInit } from '@angular/core';
import { categorieFilm } from '../../models/categorieFilm';
import {CategorieFilmService} from 'src/app/services/AdminServices/categorie-film.service'
@Component({
  selector: 'app-categorie-film-admin',
  templateUrl: './categorie-film-admin.component.html',
  styleUrls: ['./categorie-film-admin.component.css']
})
export class CategorieFilmAdminComponent implements OnInit {

  categorieFilms: categorieFilm[] = [];
  selectedCategorieFilm: categorieFilm = {
    id: 0,
    name: ''

  };
  isAddMode: boolean = true;

  constructor(private categorieFilmService: CategorieFilmService) { }

  ngOnInit(): void {
    this.loadCategorieFilms();
  }

  loadCategorieFilms(): void {
    this.categorieFilmService.findAll().subscribe(
      data => {
        this.categorieFilms = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addOrUpdateCategorieFilm(): void {
    if (this.isAddMode) {
      this.categorieFilmService.persist(this.selectedCategorieFilm).subscribe(
        data => {
          this.categorieFilms.push(data);
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.categorieFilmService.update(this.selectedCategorieFilm).subscribe(
        data => {
          const index = this.categorieFilms.findIndex(cf => cf.id === data.id);
          if (index !== -1) {
            this.categorieFilms[index] = data;
          }
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteCategorieFilm(id: number): void {
    this.categorieFilmService.delete(id).subscribe(
      () => {
        this.categorieFilms = this.categorieFilms.filter(cf => cf.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }

  editCategorieFilm(categorieFilm: categorieFilm): void {
    this.selectedCategorieFilm = { ...categorieFilm };
    this.isAddMode = false;
  }

  clearForm(): void {
    this.selectedCategorieFilm = {
      id: 0,
      name: ''

    };
    this.isAddMode = true;
  }











}
