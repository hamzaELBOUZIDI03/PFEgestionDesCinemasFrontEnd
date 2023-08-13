import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { place } from 'src/app/AdminCrud/models/place';
import { projection } from 'src/app/AdminCrud/models/projection';
import { ticket } from 'src/app/AdminCrud/models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {




  constructor(private http:HttpClient) { }

  persist(ticket : ticket) {
    return this.http.post<ticket>("http://localhost:8085/TicketAdmin/addTicket",ticket);
  }

  findAll(){
    return this.http.get<any>("http://localhost:8085/TicketAdmin/GetTicket");
  }

  delete(id:number){
    return this.http.delete('http://localhost:8085/TicketAdmin/DeleteTicket/'+id);
  }

  update(ticket: ticket){
    return this.http.put<ticket>('http://localhost:8085/TicketAdmin/UpdateTicket/'+ticket.id,ticket);

  }

  findAllplace(){
    return this.http.get<place[]>("http://localhost:8085/PlaceAdmin/GetPlace");
  }

  findAllprojection(){
    return this.http.get<projection[]>("http://localhost:8085/ProjectionAdmin/GetProjection");
  }



}
