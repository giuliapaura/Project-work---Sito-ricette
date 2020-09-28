import { Component, OnInit, Input } from '@angular/core';
import { Ricetta } from 'src/app/models/ricetta';
import { ApiService } from 'src/app/servizi/api.service';
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //ICONE FONT_AWESOME
  faTrashAlt = faTrashAlt;
  faPen = faPen;


  @Input() ricette: Ricetta[];
  @Input() classe: string;
  @Input() show: boolean = false;
  error: any;

  utenteLoggato: string = localStorage.idUser;



  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {

  }

  delete(ricette: Ricetta): void {
    this.apiService.deleteRecipe(ricette.idRicetta)
      .subscribe(data => {
        this.ricette = this.ricette.filter(i => i !== ricette);
      });
  }

  edit(ricette: Ricetta): void {
    let _id = ricette.idRicetta;
    console.log(_id);

    this.router.navigate(['modifica-ricetta/' + _id]);
  }



}
