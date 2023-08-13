import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { film } from 'src/app/AdminCrud/models/film';
import { projection } from 'src/app/AdminCrud/models/projection';
import { salle } from 'src/app/AdminCrud/models/salle';
import { seance } from 'src/app/AdminCrud/models/seance';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {


  constructor(private http:HttpClient) { }

    persist(projection : projection) {
      return this.http.post<projection>("http://localhost:8085/ProjectionAdmin/addProjection",projection);
    }

    findAll(){
      return this.http.get<any>("http://localhost:8085/ProjectionAdmin/GetProjection");
    }

    delete(id:number){
      return this.http.delete('http://localhost:8085/ProjectionAdmin/DeleteProjection/'+id);
    }

    update(projection: projection){
      return this.http.put<projection>('http://localhost:8085/ProjectionAdmin/UpdateProjection/'+projection.id,projection);

    }

    findAllsalle(){
      return this.http.get<salle[]>("http://localhost:8085/SalleAdmin/GetSalle");
    }

    findAllfilm(){
      return this.http.get<film[]>("http://localhost:8085/FilmAdmin/GetFilm");
    }

    findAllseance(){
      return this.http.get<seance[]>("http://localhost:8085/SeanceAdmin/GetSeance");
    }




















}
