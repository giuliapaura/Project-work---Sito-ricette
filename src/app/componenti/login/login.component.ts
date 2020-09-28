import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Utente } from '../../models/utente';
import { ApiService } from 'src/app/servizi/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Utente[];

  constructor(

    private apiService: ApiService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  registerUser(form: NgForm) {

    this.apiService.addUser(form)
      .subscribe((res: Utente) => {

        console.log(res);

        this.router.navigateByUrl('accedi');
      })


  };

}
