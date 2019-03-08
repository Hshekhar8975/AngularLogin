import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAlias() {
    return this
           .http
           .get(`http://localhost:2000/alias`);
  }

}
