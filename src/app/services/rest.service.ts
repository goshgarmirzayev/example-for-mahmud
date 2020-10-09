import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  getResponse() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer 123456');
    let params = new HttpParams();
    params = params.set('city', 'Baku');
    return this.httpClient.get(environment.URLS.test, {headers, params});
  }
}
