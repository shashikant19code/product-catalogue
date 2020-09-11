import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  private _readResponse(response) {
    if (typeof response === 'object' && 'Result' in response) {
      return response.Result;
    }
    return response;
  }

  private _catchError(error: any) {
    if (
      !error.status ||
      error.status === 401 ||
      error.status === 302 ||
      error.status === 10 ||
      error.status === 403 ||
      error.status === 400
    ) {
    }
    const message: string = error.message
      ? error.message
      : error.status
        ? `${error.status} - ${error.statusText}`
        : 'Server error';
    return of({
      errorResponse: error
    });
  }

  /**
   * registerUser : Resister the user.
   */
  public registerUser(requestBody) {
    const URL = environment.baseUrl + 'register';
    return this.http.post(URL, requestBody).pipe(
      map(this._readResponse),
      catchError(this._catchError)
    );
  }

    /**
   * Login : Resister the user.
   */
  public login(requestBody) {
    const URL = environment.baseUrl + 'login';
    return this.http.post(URL, requestBody).pipe(
      map(this._readResponse),
      catchError(this._catchError)
    );
  }
}
