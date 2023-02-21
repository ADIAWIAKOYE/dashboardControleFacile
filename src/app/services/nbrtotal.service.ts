import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class NbrtotalService {

  constructor(private http : HttpClient) { }


  getnbrvehicule():Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `vehicule/afficherNbr`)
  }
}
