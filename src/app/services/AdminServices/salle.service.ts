import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cinema } from 'src/app/AdminCrud/models/cinema';
import { salle } from 'src/app/AdminCrud/models/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http:HttpClient) { }

  persist(salle : salle) {
    return this.http.post<salle>("http://localhost:8085/SalleAdmin/addSalle",salle);
   }

    findAll(){
      return this.http.get<any>("http://localhost:8085/SalleAdmin/GetSalle");
    }

    delete(id:number){
      return this.http.delete('http://localhost:8085/SalleAdmin/DeleteSalle/'+id);
    }

    update(salle: salle){
      return this.http.put<salle>('http://localhost:8085/SalleAdmin/UpdateSalle/'+salle.id,salle);



    }

    findAllCinemaAdmin(){
      return this.http.get<cinema[]>("http://localhost:8085/CinemaAdmin/GetCinema");
    }

  }
