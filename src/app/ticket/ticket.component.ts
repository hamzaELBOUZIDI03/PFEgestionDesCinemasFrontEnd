import { Component, ViewChild, ElementRef } from '@angular/core';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  public ticket:any;
  public namecinema:any;
  
  constructor(private cinserv:CinemaService){

    


  }

  ngOnInit() {
    this.ticket=this.cinserv.getTicket();
    this.namecinema=this.cinserv.namecinema;


  }


  
}

