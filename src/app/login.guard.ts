import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './servizi/auth.service';

@Injectable({
  providedIn: 'root'
})


export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.checkLogin();
  }

  private checkLogin() {
    if (!this.authService.userLogged()) {
      // se l'utente non è loggato viene reindirizzato alla pagina di accesso 
      // e non può aggiungere ricette
      this.router.navigate(['/accedi']);
      return false;
    }

    return true;

  }

}
