import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit  {

  counter = 1;

  ngOnInit() {
    setInterval(() => {
      document.getElementById('radio' + this.counter)?.click();
      this.counter++;

      if (this.counter > 4) {
        this.counter = 1;
      }
    }, 3000);
  }

}
