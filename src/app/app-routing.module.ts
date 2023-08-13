import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './Accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VilleAdminComponent } from './AdminCrud/AdminComposants/ville-admin/ville-admin.component';
import { CinemaAdminComponent } from './AdminCrud/AdminComposants/cinema-admin/cinema-admin.component';
import { AdminDashboardComponent } from './AdminCrud/admin-dashboard/admin-dashboard.component';
import { CategorieFilmAdminComponent } from './AdminCrud/AdminComposants/categorie-film-admin/categorie-film-admin.component';
import { FilmAdminComponent } from './AdminCrud/AdminComposants/film-admin/film-admin.component';
import { SalleAdminComponent } from './AdminCrud/AdminComposants/salle-admin/salle-admin.component';
import { PlaceAdminComponent } from './AdminCrud/AdminComposants/place-admin/place-admin.component';
import { SeanceAdminComponent } from './AdminCrud/AdminComposants/seance-admin/seance-admin.component';
import { ProjectionAdminComponent } from './AdminCrud/AdminComposants/projection-admin/projection-admin.component';
import { TicketAdminComponent } from './AdminCrud/AdminComposants/ticket-admin/ticket-admin.component';
import { DownloadComponent } from './download/download.component';
import { TicketComponent } from './ticket/ticket.component';
import {TarifComponent} from './tarif/tarif.component';

const routes: Routes = [
  { path:'hero', component: AccueilComponent },
  { path:'cinema', component: CinemaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ville', component: VilleAdminComponent },
  { path: 'categorie', component: CategorieFilmAdminComponent},
  { path: 'cinemaAdmin', component: CinemaAdminComponent },
  { path: 'film', component: FilmAdminComponent },
  { path: 'salle', component: SalleAdminComponent },
  { path: 'place', component: PlaceAdminComponent },
  { path: 'seance', component: SeanceAdminComponent },
  { path: 'projection', component: ProjectionAdminComponent },
  { path: 'ticket', component: TicketAdminComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'tarif', component: TarifComponent },
  { path: '', redirectTo: 'accueil',pathMatch:'full' },
  // login
  { path: "",redirectTo:"login",pathMatch:"full"},
  { path: "login",component:LoginComponent},
  // { path: "accueil",component:AccueilComponent}
  { path: "download",component:DownloadComponent},
  { path: "ticket",component:TicketComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
