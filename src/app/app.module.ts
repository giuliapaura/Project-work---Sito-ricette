import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HomeComponent } from './componenti/home/home.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { LoginComponent } from './componenti/login/login.component';
import { AccediComponent } from './componenti/accedi/accedi.component';
import { CardComponent } from './componenti/card/card.component';
import { PaginaRicetteComponent } from './componenti/pagina-ricette/pagina-ricette.component';
import { AggiungiRicettaComponent } from './componenti/aggiungi-ricetta/aggiungi-ricetta.component';
import { DettaglioRicettaComponent } from './componenti/dettaglio-ricetta/dettaglio-ricetta.component';
import { ModificaRicettaComponent } from './componenti/modifica-ricetta/modifica-ricetta.component';
import { FooterComponent } from './componenti/footer/footer.component';
import { ProfiloComponent } from './componenti/profilo/profilo.component';
import { ModificaUtenteComponent } from './componenti/modifica-utente/modifica-utente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AccediComponent,
    CardComponent,
    PaginaRicetteComponent,
    AggiungiRicettaComponent,
    DettaglioRicettaComponent,
    ModificaRicettaComponent,
    FooterComponent,
    ProfiloComponent,
    ModificaUtenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
