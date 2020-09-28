import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servizi/api.service';
import { Ricetta } from 'src/app/models/ricetta';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modifica-ricetta',
  templateUrl: './modifica-ricetta.component.html',
  styleUrls: ['./modifica-ricetta.component.css']
})
export class ModificaRicettaComponent implements OnInit {

  ricetta: Ricetta;
  faImage = faUpload;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }



  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.params;

    this.apiService.getRecipeId(routeParams.id)
      .subscribe((data: any) => {


        this.ricetta = data;

      });
  }

  readUrl(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.ricetta.img = reader.result as string;

      }

    }


  }

  edit(addForm) {

    this.apiService.editRecipe(addForm.value, this.ricetta.idRicetta)
      .subscribe((data: Ricetta) => {
        this.router.navigate(['ricette/' + this.ricetta.idRicetta]);



      }, error => {
        alert(error);
      });



  }
}


