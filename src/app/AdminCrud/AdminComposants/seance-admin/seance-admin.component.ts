
// import { Component, OnInit } from '@angular/core';
// import { seance } from '../../models/seance';
// import { SeanceService } from 'src/app/services/AdminServices/seance.service';


// @Component({
//   selector: 'app-seance-admin',
//   templateUrl: './seance-admin.component.html',
//   styleUrls: ['./seance-admin.component.css']
// })
// export class SeanceAdminComponent implements OnInit {

//   seances: seance[] = [];
//   selectedSeance: seance = {
//     id: 0,
//     heureDebut: new Date()


//   };
//   isAddMode: boolean = true;

//   constructor(private seanceService: SeanceService) { }

//   ngOnInit(): void {
//     this.loadSeances();
//   }

//   loadSeances(): void {
//     this.seanceService.findAll().subscribe(
//       data => {
//         this.seances = data;
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }

//   addOrUpdateSeance(): void {
//     if (this.isAddMode) {
//       this.seanceService.persist(this.selectedSeance).subscribe(
//         data => {
//           this.seances.push(data);
//           this.clearForm();
//         },
//         error => {
//           console.log(error);
//         }
//       );
//     } else {
//       this.seanceService.update(this.selectedSeance).subscribe(
//         data => {
//           const index = this.seances.findIndex(ss => ss.id === data.id);
//           if (index !== -1) {
//             this.seances[index] = data;
//           }
//           this.clearForm();
//         },
//         error => {
//           console.log(error);
//         }
//       );
//     }
//   }

//   deleteSeance(id: number): void {
//     this.seanceService.delete(id).subscribe(
//       () => {
//         this.seances = this.seances.filter(ss => ss.id !== id);
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }

//   editSeance(seance: seance): void {
//     this.selectedSeance = { ...seance };
//     this.isAddMode = false;
//   }

//   clearForm(): void {
//     this.selectedSeance = {
//       id: 0,
//       heureDebut: new Date()

//     };
//     this.isAddMode = true;
//   }

// }







import { Component, OnInit } from '@angular/core';
import { seance } from '../../models/seance';
import { SeanceService } from 'src/app/services/AdminServices/seance.service';


@Component({
  selector: 'app-seance-admin',
  templateUrl: './seance-admin.component.html',
  styleUrls: ['./seance-admin.component.css']
})
export class SeanceAdminComponent implements OnInit {

  seances: seance[] = [];
  selectedSeance: seance = {
    id: 0,
    heureDebut: ''
  };
  isAddMode: boolean = true;

  constructor(private seanceService: SeanceService) { }

  ngOnInit(): void {
    this.loadSeances();
  }

  loadSeances(): void {
    this.seanceService.findAll().subscribe(
      data => {
        this.seances = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addOrUpdateSeance(): void {
    if (this.isAddMode) {
      this.seanceService.persist(this.selectedSeance).subscribe(
        data => {
          this.seances.push(data);
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.seanceService.update(this.selectedSeance).subscribe(
        data => {
          const index = this.seances.findIndex(ss => ss.id === data.id);
          if (index !== -1) {
            this.seances[index] = data;
          }
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteSeance(id: number): void {
    this.seanceService.delete(id).subscribe(
      () => {
        this.seances = this.seances.filter(ss => ss.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }

  editSeance(seance: seance): void {
    this.selectedSeance = { ...seance };
    this.isAddMode = false;
  }

  clearForm(): void {
    this.selectedSeance = {
      id: 0,
      heureDebut: ''
    };
    this.isAddMode = true;
  }
}

