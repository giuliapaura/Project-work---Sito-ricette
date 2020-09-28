import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { ApiService } from 'src/app/servizi/api.service';

@Component({
  selector: 'app-modifica-utente',
  templateUrl: './modifica-utente.component.html',
  styleUrls: ['./modifica-utente.component.css']
})
export class ModificaUtenteComponent implements OnInit {

  @Input() datiUtente: Utente;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {


  }

  modificaUser(f) {
    this.apiService.editUser(f.value, this.datiUtente.idUser)
      .subscribe((data: Utente) => {
        console.log(data);

        window.location.href = window.location.href
      }, error => {
        alert(error);
      });




  }

}
