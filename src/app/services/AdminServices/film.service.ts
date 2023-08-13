import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categorieFilm } from 'src/app/AdminCrud/models/categorieFilm';
import {film} from 'src/app/AdminCrud/models/film'

@Injectable({
  providedIn: 'root'
})
export class FilmService {


  constructor(private http:HttpClient) { }

  persist(film : film) {
    return this.http.post<film>("http://localhost:8085/FilmAdmin/addFilm",film);
   }

    findAll(){
      return this.http.get<any>("http://localhost:8085/FilmAdmin/GetFilm");
    }

    delete(id:number){
      return this.http.delete('http://localhost:8085/FilmAdmin/DeleteFilm/'+id);
    }

    update(film: film){
      return this.http.put<film>('http://localhost:8085/FilmAdmin/UpdateFilm/'+film.id,film);



    }

    findAllcategorieFilm(){
      return this.http.get<categorieFilm[]>("http://localhost:8085/CategorieFilmAdmin/GetCategorieFilm");
    }



}
