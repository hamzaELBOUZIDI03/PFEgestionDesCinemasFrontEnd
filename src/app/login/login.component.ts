// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   constructor(private router: Router) {}

//   onLogin() {

//     this.router.navigate(['/ville']);
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  message: any

  constructor(private loginservice: LoginserviceService,private router:Router) {}

  ngOnInit(): void {
  }

  doLogin() {
    let resp = this.loginservice.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
    this.router.navigate(["/ville"])
    });
  }

}
