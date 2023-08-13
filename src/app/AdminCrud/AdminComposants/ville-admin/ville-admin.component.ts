

import { Component, OnInit } from '@angular/core';
import { ville } from 'src/app/AdminCrud/models/ville';
import { VilleService } from 'src/app/services/AdminServices/ville.service';

@Component({
  selector: 'app-ville-admin',
  templateUrl: './ville-admin.component.html',
  styleUrls: ['./ville-admin.component.css']
})
export class VilleAdminComponent implements OnInit {

  villes: ville[] = [];
  selectedVille: ville = {
    id: 0,
    name: '',
    longitude: 0,
    latitude: 0,
    altitude: 0
  };
  isAddMode: boolean = true;

  constructor(private villeService: VilleService) { }

  ngOnInit(): void {
    this.loadVilles();
  }

  loadVilles(): void {
    this.villeService.findAll().subscribe(
      data => {
        this.villes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addOrUpdateVille(): void {
    if (this.isAddMode) {
      this.villeService.persist(this.selectedVille).subscribe(
        data => {
          this.villes.push(data);
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.villeService.update(this.selectedVille).subscribe(
        data => {
          const index = this.villes.findIndex(v => v.id === data.id);
          if (index !== -1) {
            this.villes[index] = data;
          }
          this.clearForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteVille(id: number): void {
    this.villeService.delete(id).subscribe(
      () => {
        this.villes = this.villes.filter(v => v.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }

  editVille(ville: ville): void {
    this.selectedVille = { ...ville };
    this.isAddMode = false;
  }

  clearForm(): void {
    this.selectedVille = {
      id: 0,
      name: '',
      longitude: 0,
      latitude: 0,
      altitude: 0
    };
    this.isAddMode = true;
  }

}

