import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Ricetta } from 'src/app/models/ricetta';
import { ApiService } from 'src/app/servizi/api.service';

@Component({
  selector: 'app-pagina-ricette',
  templateUrl: './pagina-ricette.component.html',
  styleUrls: ['./pagina-ricette.component.css']
})
export class PaginaRicetteComponent implements OnInit {

  tutte: Ricetta[];
  risultati;
  show: boolean;

  faSearch = faSearch;


  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getRecipes()
      .subscribe((data: Ricetta[]) => {
        this.tutte = data;

      })



  }

  search(search) {

    this.apiService.searchRecipes(search)
      .subscribe((res: Ricetta[]) => {

        this.risultati = res;

        if (search.length === 0) {
          this.risultati = false;



        }
      })






  }






  // }


}


