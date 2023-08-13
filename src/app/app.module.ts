import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './Accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { VilleAdminComponent } from './AdminCrud/AdminComposants/ville-admin/ville-admin.component';
import { FilmAdminComponent } from './AdminCrud/AdminComposants/film-admin/film-admin.component';
import { PlaceAdminComponent } from './AdminCrud/AdminComposants/place-admin/place-admin.component';
import { ProjectionAdminComponent } from './AdminCrud/AdminComposants/projection-admin/projection-admin.component';
import { SalleAdminComponent } from './AdminCrud/AdminComposants/salle-admin/salle-admin.component';
import { SeanceAdminComponent } from './AdminCrud/AdminComposants/seance-admin/seance-admin.component';
import { TicketAdminComponent } from './AdminCrud/AdminComposants/ticket-admin/ticket-admin.component';
import { CategorieFilmAdminComponent } from './AdminCrud/AdminComposants/categorie-film-admin/categorie-film-admin.component';
import { CinemaAdminComponent } from './AdminCrud/AdminComposants/cinema-admin/cinema-admin.component';
import { AdminDashboardComponent } from './AdminCrud/admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavComponent } from './AdminCrud/sidenav/sidenav.component';
import { TicketComponent } from './ticket/ticket.component';
import { DownloadComponent } from './download/download.component';
import { TarifComponent } from './tarif/tarif.component';




// const routes: Routes = [
//   { path: '', component: CinemaComponent }, // Route de l'accueil
//   // Ajoutez d'autres routes ici si nécessaire
// ];

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    ContactComponent,
    AccueilComponent,
    LoginComponent,
    CinemaAdminComponent,
    VilleAdminComponent,
    FilmAdminComponent,
    PlaceAdminComponent,
    ProjectionAdminComponent,
    SalleAdminComponent,
    SeanceAdminComponent,
    TicketAdminComponent,
    CategorieFilmAdminComponent,
    AdminDashboardComponent,
    NavBarComponent,
    AdminDashboardComponent,
    SidenavComponent,
    TicketComponent,
    DownloadComponent,
    TarifComponent

  ],
  imports: [
    FormsModule,
    NgbCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,


    FontAwesomeModule,
    RouterModule,
    NgbModule,
    NgbCarouselModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
