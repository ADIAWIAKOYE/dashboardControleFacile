import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) { }

  login(telephone: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'auth/signin',
      {
        telephone,
        password,
      },
    );
  }
  
}
