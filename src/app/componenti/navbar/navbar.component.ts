import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/servizi/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {

  loginbtn: boolean;
  logoutbtn: boolean;

  name: string = localStorage.loggedUser;

  constructor(
    private authService: AuthService
  ) {

    if (this.authService.userLogged()) {
      this.loginbtn = false;
      this.logoutbtn = true;
    } else {
      this.loginbtn = true;
      this.logoutbtn = false;
    }
  }

  ngOnInit() {
  }

  logout() {
    this.authService.deleteToken();
    window.location.href = window.location.href;
  }

}
