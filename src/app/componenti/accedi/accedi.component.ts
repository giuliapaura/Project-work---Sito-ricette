import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servizi/auth.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.component.html',
  styleUrls: ['./accedi.component.css']
})
export class AccediComponent implements OnInit {

  errorMsg: string;


  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {



  }

  loginUser(form: NgForm) {
    this.auth.accedi(form)
      .subscribe(res => {
        console.log('Sei dentro ' + localStorage.loggedUser);

        window.location.href = window.location.href;

      }, error => this.errorMsg = error);


    this.router.navigateByUrl('home');
  }

}
