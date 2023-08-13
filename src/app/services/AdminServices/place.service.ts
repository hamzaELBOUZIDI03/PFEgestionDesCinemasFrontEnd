import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { place } from 'src/app/AdminCrud/models/place';
import { salle } from 'src/app/AdminCrud/models/salle';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {


  constructor(private http:HttpClient) { }

  persist(place : place) {
    return this.http.post<place>("http://localhost:8085/PlaceAdmin/addPlace",place);
   }

    findAll(){
      return this.http.get<any>("http://localhost:8085/PlaceAdmin/GetPlace");
    }

    delete(id:number){
      return this.http.delete('http://localhost:8085/PlaceAdmin/DeletePlace/'+id);
    }

    update(place: place){
      return this.http.put<place>('http://localhost:8085/PlaceAdmin/UpdatePlace/'+place.id,place);



    }

    findAllsalle(){
      return this.http.get<salle[]>("http://localhost:8085/SalleAdmin/GetSalle");
    }




}
