import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NgForm } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { Utente } from '../models/utente';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedName: string;
  baseUrl = "http://localhost:8888/PW/php/";
  private options: HttpHeaders = new HttpHeaders()
    .set('Content-type', 'application/x-www-form-urlencoded');

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  private bodyForm(form: NgForm) { // private perchè accessibile solo all'interno di questa classe
    let param = new HttpParams() //consente di passare parametri via url
      .set('username', form.value.username)
      .set('password', form.value.password);
    this.loggedName = form.value.username;

    return param;
  }

  accedi(datiForm): Observable<string> {

    const body = this.bodyForm(datiForm);

    return this.http.post(this.baseUrl + 'auth.php', body, { headers: this.options })
      .pipe(
        map(res => {
          if (res) {

            this.setSession(res['token'], res['idUser']);
          }// if
          return res['token'], res['id'];
        }), catchError(this.errorHandler)
      );

  }

  private setSession(jwt, id) { //metodo per memorizzare il token all'interno di localstorage
    let expired: number = new Date().getTime() + 10000; //dopo 10 sec il token scade


    localStorage.setItem('loggedUser', this.loggedName);
    localStorage.setItem('token', jwt);
    localStorage.setItem('idUser', id);
    localStorage.setItem('expire', expired.toString()); // toString() strasforma numero in stringa
  }

  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('expire');
    localStorage.removeItem('idUser');
    localStorage.removeItem('loggedUser');

  }

  getToken() {
    return localStorage.getItem('token');

  }
  userLogged() {
    const usertoken = this.getToken();
    if (usertoken !== null) {
      return true;
    }
    return false;
  }
  //GESTIONE ERRORI
  errorHandler(error: any) {
    console.log(error);

    let msg: string;
    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) {
        msg = 'Applicazione offline';
      } else {
        msg = 'Si è verificato un errore: ' + error.error.msg + ' (server status code ' + error.status + ' )';
      }
      return throwError(msg);
    }
    return throwError('Si è verificato un errore di tipo: ' + error.message);
  }
}
