import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ricetta } from 'src/app/models/ricetta';
import { Utente } from 'src/app/models/utente';
import { ApiService } from 'src/app/servizi/api.service';
import { AuthService } from 'src/app/servizi/auth.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
  loggedId: string = localStorage.idUser;
  utente: Utente;
  ricetteUtente: Ricetta[];

  noRecipes: boolean;

  showElimina: boolean = false;
  showRicette: boolean = true;
  showModifica: boolean = false;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {

    this.apiService.getUserById(this.loggedId)
      .subscribe(res => {
        this.utente = res;
        let author = this.utente.idUser.toString()


        this.apiService.getRecipeAuthor(author)
          .subscribe((res: Ricetta[]) => {
            this.ricetteUtente = res;
            if (res.length === 0) {
              this.noRecipes = true;
            }

          })

      })

  }
  ricette() {
    this.showRicette = true;
    this.showModifica = false;
    this.showElimina = false;
  }
  modifica() {
    console.log('vuoi modificare il profilo?');
    this.showModifica = true;
    this.showRicette = false;
    this.showElimina = false;
  }

  elimina() {
    console.log('vuoi eliminare il profilo?');
    this.showElimina = true;
    this.showRicette = false;
    this.showModifica = false;

  }
  confermaElimina() {
    console.log('eliminato' + this.utente.idUser);

    this.apiService.deleteUser(this.utente.idUser)
      .subscribe(res => { });

    this.authService.deleteToken();
    this.router.navigateByUrl('home');
    window.location.href = window.location.href;


  }





}
