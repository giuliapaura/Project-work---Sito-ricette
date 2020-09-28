import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utente } from '../models/utente';
import { Ricetta } from '../models/ricetta';
import { NgForm } from '@angular/forms';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ricetta: Ricetta[];
  baseUrl = "http://localhost:8888/PW/php/";
  username = localStorage.loggedName;


  constructor(
    private http: HttpClient
  ) { }

  addUser(form: NgForm): Observable<Utente> {
    return this.http.post<Utente>(this.baseUrl + 'add-user.php', form.value);

  }
  editUser(utente: Utente, id) {
    return this.http.put<Utente>(this.baseUrl + 'edit-user.php?id=' + id, utente);

  }
  deleteUser(idUser: number) {
    return this.http.delete<Utente>(this.baseUrl + 'delete-user.php?id=' + idUser);

  }

  addRecipe(ricetta: Ricetta) {
    return this.http.post(this.baseUrl + 'add-recipe.php', ricetta);

  }

  searchRecipes(term: string): Observable<Ricetta[]> {

    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Ricetta[]>(this.baseUrl + 'search.php/?term=' + term);
  }

  getRecipes() {
    return this.http.get<Ricetta[]>(this.baseUrl + 'get-recipes.php');
  }

  getUserByUsername(username: string) {
    return this.http.get<Utente>(this.baseUrl + 'getby-username.php?username=' + username)

  }

  getUserById(id: string) {
    return this.http.get<Utente>(this.baseUrl + 'getby-userid.php?id=' + id)
  }

  getRecipeId(id) {

    return this.http.get<Ricetta>(this.baseUrl + 'recipe-id.php?id=' + id);
  }

  getRecipeAuthor(id: string): Observable<Ricetta[]> {
    return this.http.get<Ricetta[]>(this.baseUrl + 'recipe-author.php?id=' + id);
  }

  deleteRecipe(id: number) {
    return this.http.delete<Ricetta[]>(this.baseUrl + 'delete-recipe.php?id=' + id);
  }

  editRecipe(ricetta: Ricetta, id): Observable<Ricetta> {
    return this.http.put<Ricetta>(this.baseUrl + 'edit-recipe.php?id=' + id, ricetta);

  }

  getRecipeIdCat(categoria: string, dieta: string, id: number): Observable<Ricetta[]> {
    return this.http.get<Ricetta[]>(this.baseUrl + 'recipe-category.php?categoria=' + categoria + '&dieta=' + dieta + '&id=' + id)
  }

}

