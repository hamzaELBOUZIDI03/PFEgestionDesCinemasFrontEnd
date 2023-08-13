import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public ticket:any;
  public namecinema:any;

  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  public host:string="http://localhost:8085"

  constructor(private http:HttpClient) { }

  public getVilles(){

    return this.http.get(this.host+"/villes");
    // return this.http.get(this.host+"/VilleAdmin/GetVille");

  }

  getCinemas(v:any){
   return this.http.get(v._links.cinemas.href);

  }
  getSalles(c:any){
    return this.http.get(c._links.salles.href);


  }

  getProjections(salle:any){
    let url=salle._links.projections.href.replace("{?projection}","");

    return this.http.get(url+"?projection=p1");

  }

  getPlaces(p:any){

    let url=p._links.tickets.href.replace("{?projection}","");

    return this.http.get(url+"?projection=ticketProj");

  }
  payerTickets(dataForm:any){
    return this.http.post(this.host+"/payerTickets",dataForm);


  }
  setTicket(data:any){
    console.log(data[0].nomclient);
      this.ticket=data[0];
  }

  getTicket(){

    console.log(this.ticket.nomclient);
    return this.ticket;
}


}
