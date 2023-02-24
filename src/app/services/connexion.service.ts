import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  token: any;

  constructor(private http: HttpClient) { }

  saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  getToken(): string {
    return this.token;
  }


  login(telephone: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'auth/signin',
      {
        telephone,
        password,
      },
      httpOptions
    );
  }
  
}
