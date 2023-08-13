import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cinema } from 'src/app/AdminCrud/models/cinema';
import { ville } from 'src/app/AdminCrud/models/ville';

@Injectable({
  providedIn: 'root'
})
export class CinemaAdminService {

  findById(id: number): Observable<cinema> {
    return this.http.get<cinema>(`http://localhost:8085/CinemaAdmin/GetCinema/${id}`);
  }



  constructor(private http:HttpClient) { }


  persist(cinema : cinema) {
    return this.http.post<cinema>("http://localhost:8085/CinemaAdmin/addCinema",cinema);
   }

    findAll(){
      return this.http.get<any>("http://localhost:8085/CinemaAdmin/GetCinema");
    }

    delete(id:number){
      return this.http.delete('http://localhost:8085/CinemaAdmin/DeleteCinema/'+id);
    }

    update(cinema: cinema){
      return this.http.put<cinema>('http://localhost:8085/CinemaAdmin/UpdateCinema/'+cinema.id,cinema);

    }
    findAllville(){
      return this.http.get<ville[]>("http://localhost:8085/VilleAdmin/GetVille");
    }


}
