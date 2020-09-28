import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servizi/api.service';
import { Ricetta } from 'src/app/models/ricetta';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-dettaglio-ricetta',
  templateUrl: './dettaglio-ricetta.component.html',
  styleUrls: ['./dettaglio-ricetta.component.css']
})
export class DettaglioRicettaComponent implements OnInit {

  ricetta: Ricetta;
  correlate: Ricetta[];
  ingredienti;
  steps;
  videoUrl: SafeResourceUrl;
  categoria: string;
  dieta: string;




  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    const id = +this.activatedRoute.snapshot.params.id;

    this.apiService.getRecipeId(id)
      .subscribe((res) => {

        this.ricetta = res;
        this.ingredienti = this.ricetta.ingr.split(',');
        this.steps = this.ricetta.prep.split("\n");
        let videoId = this.ricetta.video.split("=").pop();
        let url = 'https://www.youtube.com/embed/';
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url + videoId);
        this.categoria = this.ricetta.categoria;
        this.dieta = this.ricetta.dieta;

        // Ricette correlate: Select per categoria e dieta uguali a quelle della ricetta
        this.apiService.getRecipeIdCat(this.categoria, this.dieta, this.ricetta.idRicetta).
          subscribe((res) => {
            this.correlate = res;


          })
      });







  }




}
