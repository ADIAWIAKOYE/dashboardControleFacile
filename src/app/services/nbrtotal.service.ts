import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class NbrtotalService {

  constructor(private http : HttpClient) { }

/////////////////////// SERVICE POUR AFFICHAGE DU NOMBRE DE VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	 
  getnbrvehicule():Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `vehicule/afficherNbr`)
  }

/////////////////////// SERVICE POUR AFFICHAGE DU NOMBRE D' INFRACTION DEPUIT LA BASE DE DONNER  /////////////////////////////////	 
  getnbrinfraction():Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `infraction/affichernbr`)
  }

/////////////////////// SERVICE POUR AFFICHAGE DU NOMBRE D' UTILISATEUR DEPUIT LA BASE DE DONNER  /////////////////////////////////	   
  getnbrutilisateur():Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `utilisateur/afficherNbr`)
  }

/////////////////////// SERVICE POUR AFFICHAGE DU NOMBRE DE CONTROLLEUR DE VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	  
  getnbrcontrolleur():Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `policier/afficherNbr`)
  }
}
