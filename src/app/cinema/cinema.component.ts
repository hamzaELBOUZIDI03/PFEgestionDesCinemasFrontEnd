import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']

})
export class CinemaComponent implements OnInit {

  public villes:any; public cinemas:any; public salles:any;
  public currentVille:any;
  public currentCinema:any;
  public currentProjection: any;
  public selectedTickets:any;
  public ticket:any;

  constructor( public router:Router, public cinemaService:CinemaService){}

  ngOnInit() {

    this.chargerVilles();

  }
  private chargerVilles(){
    this.cinemaService.getVilles()
    .subscribe(data=>{
      this.villes=data;
    },err=>{
      console.log(err);
    })
  }


  onGetCinemas(v:any){
    this.salles=undefined;
    this.currentVille=v
    this.cinemaService.getCinemas(v)
    .subscribe(data=>{
      this.cinemas=data;
    },err=>{
      console.log(err);
    })
  }

  onGetSalles(c:any){
    this.currentCinema=c;
    this.cinemaService.getSalles(c)
    .subscribe(data=>{
      this.salles=data;
      this.salles._embedded.salles.forEach((salle:any) => {
        this.cinemaService.getProjections(salle)
        .subscribe(data=>{
          salle.projections=data;
        },err=>{
          console.log(err);
        })

      });

    },err=>{
      console.log(err);
    })
  }

  onGetTicketsPlaces(p:any){
    this.currentProjection = p;
    this.cinemaService.getPlaces(p)
    .subscribe(data=>{
      this.currentProjection.tickets=data;
      this.selectedTickets=[];
    },err=>{
      console.log(err);
    })
  }

  onSelectTicket(t:any){
    if(!t.selected){
      t.selected=true;
      this.selectedTickets.push(t);
    }
    else{
      t.selected=false;
      this.selectedTickets.splice(this.selectedTickets.indexOf(t),1);
    }
    console.log(this.selectedTickets);
  }

  getTicketClass(t:any){
    let str="btn ticket";
    if(t.reservee==true){
      str+="btn-danger";

    }
    else if(t.selected){
      str+="btn-warning"
    }
    else{
      str+="btn-success"
    }
    return str;

  }

  onPayTickets(dataForm:any){
    let tickets: any[]=[];
    this.selectedTickets.forEach((t:any)=>{
      tickets.push(t.id);
    });
    dataForm.tickets=tickets;
    this.cinemaService.payerTickets(dataForm)
    .subscribe(data=>{

      this.cinemaService.setTicket(data);
      this.cinemaService.namecinema=this.currentCinema.name;

      alert("Ticket(s) réservé(s) avec succès");
      this.router.navigate(['/download']);
      this.onGetTicketsPlaces(this.currentProjection);

    },err=>{
      console.log(err);
    })

  }

}
