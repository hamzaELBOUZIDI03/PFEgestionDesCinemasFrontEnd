import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { seance } from 'src/app/AdminCrud/models/seance';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private http:HttpClient) { }

  persist(seance : seance) {
    return this.http.post<seance>("http://localhost:8085/SeanceAdmin/addSeance",seance);
   }

    findAll(){
      return this.http.get<any>("http://localhost:8085/SeanceAdmin/GetSeance");
    }

    delete(id:number){
      return this.http.delete('http://localhost:8085/SeanceAdmin/DeleteSeance/'+id);
    }

    update(seance: seance){
      return this.http.put<seance>('http://localhost:8085/SeanceAdmin/UpdateSeance/'+seance.id,seance);

    }
}
