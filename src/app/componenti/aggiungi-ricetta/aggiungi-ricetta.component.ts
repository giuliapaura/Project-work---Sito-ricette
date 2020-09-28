import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servizi/api.service';
import { Router } from '@angular/router';
import { Ricetta } from '../../models/ricetta';
import { Utente } from 'src/app/models/utente';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aggiungi-ricetta',
  templateUrl: './aggiungi-ricetta.component.html',
  styleUrls: ['./aggiungi-ricetta.component.css']
})
export class AggiungiRicettaComponent implements OnInit {

  faImage = faUpload;

  ricetta: Ricetta[];
  idUtente: string = localStorage.idUser;
  imageSrc: string;
  utente: Utente;
  autore: string = localStorage.loggedUser
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {



    this.apiService.getUserByUsername(this.autore)
      .subscribe((data: Utente) => {

        this.utente = data;

      });

  }


  submit(addForm) {

    this.apiService.addRecipe(addForm.value)
      .subscribe((data: Ricetta) => {
        this.router.navigate(['ricette']);

      });


  };

  //caricamento immagine
  readUrl(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

      }

    }


  }
}
