import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

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
    if (error) {
      throw message;
    }
    return of({
      errorResponse: error
    });
  }

  /**
   * getAllProducts : To get all the products from the 'products' collection.
   */
  public getAllProducts() {
    const URL = environment.baseUrl + environment.productApi;
    return this._http.get(URL).pipe(
      map(this._readResponse),
      catchError(this._catchError)
    );
  }

  /**
   * getProductById : Get product by id.
   */
  public getProductById(id) {
    const URL = environment.baseUrl + environment.productApi + '/' + id;
    return this._http.get(URL).pipe(
      map(this._readResponse),
      catchError(this._catchError)
    );
  }

  /**
   * deleteProductById: Delete product by id from 'products' collection.
   */
  public deleteProductById(id) {
    const URL = environment.baseUrl + environment.productApi + '/' + id;
    return this._http.delete(URL, id).pipe(
      map(this._readResponse),
      catchError(this._catchError)
    );
  }

  /**
   * addProductToList: To add the product in the 'products' collection.
   */
  public addProductToList(requestBody) {
    const URL = environment.baseUrl + environment.productApi;
    return this._http.post(URL, requestBody).pipe(
      map(this._readResponse),
      catchError(this._catchError)
    );
  }

  /**
   * updateProductToList: Update the product with id .
   */
  public updateProductToList(requestBody, id) {
    const URL = environment.baseUrl + environment.productApi + '/' + id;
    return this._http.put(URL, requestBody).pipe(
      map(this._readResponse),
      catchError(this._catchError)
    );
  }
}
