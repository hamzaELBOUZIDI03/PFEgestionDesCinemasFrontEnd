

import { Component, OnInit } from '@angular/core';
import { salle } from '../../models/salle';
import { projection } from '../../models/projection';
import { film } from '../../models/film';
import { seance } from '../../models/seance';
import { ProjectionService } from 'src/app/services/AdminServices/projection.service';
import { ticket } from '../../models/ticket';
import { tr } from 'date-fns/locale';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { place } from '../../models/place';
import { TicketService } from 'src/app/services/AdminServices/ticket.service';


@Component({
  selector: 'app-ticket-admin',
  templateUrl: './ticket-admin.component.html',
  styleUrls: ['./ticket-admin.component.css']
})
export class TicketAdminComponent implements OnInit {
  tickets: ticket[] = [];
  selectedTicket: ticket = {
    id: 0,
    nomClient: ' ',
    prix:0,
    codePayement:0,
    reservee:false,
    place: {

      id: 0,
      numero: 0,
      longitude: 0,
      latitude: 0,
      altitude: 0,
      salle:{
        id:0,
        cinema: {
          id:0,
          ville: {id:0}
      }


      }
  },projection:{
    id: 0,
    dateProjection: new Date(),
    prix:0,
    salle: {

      id: 0,
      name: '',
      nombrePlace: 0,
      cinema: {
        id:0,
        ville: {id:0}
    }
  },film:{
    id: 0,
    titre: '',
    description: '',
    realisateur: '',
    dateSortie: new Date(),
    duree: 0,
    photo: '',
    categorieFilm: {id:0}
  },seance:{

    id: 0,
    heureDebut: ''
  }
  }

    }

  isAddMode: boolean = true;
  places: place[] = [];
  projections: projection[] = [];




  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadtickets();
    this.loadplaces();
    this.loadprojections();





  }

  loadtickets(): void {
    this.ticketService.findAll().subscribe(
      data => {
        this.tickets = data;
      },
      error => {
        console.log(error);
      }
    );
  }



  loadplaces(): void {
    this.ticketService.findAllplace().subscribe(
      data => {
        this.places = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  loadprojections(): void {
    this.ticketService.findAllprojection().subscribe(
      data => {
        this.projections = data;
      },
      error => {
        console.log(error);
      }
    );
  }



  addOrUpdateTicket(): void {
    if (this.isAddMode) {
      this.ticketService.persist(this.selectedTicket).subscribe(
        data => {
          this.tickets.push(data);
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.ticketService.update(this.selectedTicket).subscribe(
        data => {
          const index = this.tickets.findIndex(t => t.id === data.id);
          if (index !== -1) {
            this.tickets[index] = data;
          }
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteTicket(id: number): void {
    this.ticketService.delete(id).subscribe(
      () => {
        this.tickets = this.tickets.filter(t => t.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }

  editTicket(ticket: ticket): void {
    this.selectedTicket = { ...ticket };
    this.isAddMode = false;
  }

  clearForm(): void {
    this.selectedTicket = {
      id: 0,
      nomClient: ' ',
      prix:0,
      codePayement:0,
      reservee:false,
      place: {

        id: 0,
        numero: 0,
        longitude: 0,
        latitude: 0,
        altitude: 0,
        salle:{
          id:0,
          cinema: {
            id:0,
            ville: {id:0}
        }


        }
    },projection:{
      id: 0,
      dateProjection: new Date(),
      prix:0,
      salle: {

        id: 0,
        name: '',
        nombrePlace: 0,
        cinema: {
          id:0,
          ville: {id:0}
      }
    },film:{
      id: 0,
      titre: '',
      description: '',
      realisateur: '',
      dateSortie: new Date(),
      duree: 0,
      photo: '',
      categorieFilm: {id:0}
    },seance:{

      id: 0,
      heureDebut: ''
    }
    }
    };
    this.isAddMode = true;
  }
}





