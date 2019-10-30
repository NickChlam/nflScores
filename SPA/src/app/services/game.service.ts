import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameService {


  constructor(private http: HttpClient) { }
  baseURL = 'http://localhost:3001/';
  getGames(week: String) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

    return this.http
        .get( this.baseURL + 'games/' + week, {headers})
        .pipe(
          catchError(this.handleError)
        );
  }

  postPick(body: Object) {
    return this.http
    .post(this.baseURL + 'picks', body)
    .pipe(
      catchError(this.handleError)
    );
  }

  getPicks(week: String, email?: String, uid?: String){
    return this.http
      .get(this.baseURL + 'picks/' +  week + '?email=nick.chlam@rht.com')
      .pipe(
        catchError(this.handleError)
      );
  }

  getResults(week: String) {
    return this.http
    .get(this.baseURL + 'results/' + week)
    .pipe(
        catchError(this.handleError)
      );
  }

  getWeek() {
    return this.http.get(this.baseURL + 'week/')
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
