import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{categorieFilm} from 'src/app/AdminCrud/models/categorieFilm'

@Injectable({
  providedIn: 'root'
})
export class CategorieFilmService {


  constructor(private http:HttpClient) { }

  persist(categorieFilm : categorieFilm) {
    return this.http.post<categorieFilm>("http://localhost:8085/CategorieFilmAdmin/addCategorieFilm",categorieFilm);
   }

    findAll(){
      return this.http.get<any>("http://localhost:8085/CategorieFilmAdmin/GetCategorieFilm");
    }

    delete(id:number){
      return this.http.delete('http://localhost:8085/CategorieFilmAdmin/DeleteCategorieFilm/'+id);
    }

    update(categorieFilm: categorieFilm){
      return this.http.put<categorieFilm>('http://localhost:8085/CategorieFilmAdmin/UpdateCategorieFilm/'+categorieFilm.id,categorieFilm);

    }


}
