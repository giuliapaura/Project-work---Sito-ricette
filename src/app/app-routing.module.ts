import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { AccediComponent } from './componenti/accedi/accedi.component';
import { PaginaRicetteComponent } from './componenti/pagina-ricette/pagina-ricette.component';
import { AggiungiRicettaComponent } from './componenti/aggiungi-ricetta/aggiungi-ricetta.component';
import { DettaglioRicettaComponent } from './componenti/dettaglio-ricetta/dettaglio-ricetta.component';
import { LoginGuard } from './login.guard';
import { ModificaRicettaComponent } from './componenti/modifica-ricetta/modifica-ricetta.component';
import { ProfiloComponent } from './componenti/profilo/profilo.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'registrati', component: LoginComponent },
  { path: 'accedi', component: AccediComponent },
  { path: 'profilo', component: ProfiloComponent, canActivate: [LoginGuard] },
  { path: 'ricette', component: PaginaRicetteComponent },
  { path: 'aggiungi-ricetta', component: AggiungiRicettaComponent, canActivate: [LoginGuard] },
  { path: 'ricette/:id', component: DettaglioRicettaComponent },
  { path: 'modifica-ricetta/:id', component: ModificaRicettaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
