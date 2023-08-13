import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ville } from 'src/app/AdminCrud/models/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http:HttpClient) { }

  persist(ville : ville) {
    return this.http.post<ville>("http://localhost:8085/VilleAdmin/addVille",ville);
   }

    findAll(){
      return this.http.get<any>("http://localhost:8085/VilleAdmin/GetVille");
    }

    delete(id:number){
      return this.http.delete('http://localhost:8085/VilleAdmin/DeleteVille/'+id);
    }

    update(ville: ville){
      return this.http.put<ville>('http://localhost:8085/VilleAdmin/UpdateVille/'+ville.id,ville);

    }




}
