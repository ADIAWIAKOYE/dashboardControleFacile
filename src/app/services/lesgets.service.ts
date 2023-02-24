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
export class LesgetsService {

  constructor(private http : HttpClient) { }


  /////////////////////// SERVICE POUR AFFICHAGE LE PERMIS D'UN UTILISATEUR DEPUIT LA BASE DE DONNER  /////////////////////////////////	 
 
  getpermisparuser(iduser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `utilisateur/afficher/${iduser}`)
  }

/////////////////////// SERVICE POUR AFFICHAGE LES VEHICULES D'UN UTILISATEUR DEPUIT LA BASE DE DONNER  /////////////////////////////////	 
  
  getvehiculeparuser(iduser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `vehicule/user/${iduser}`)
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  getvehiculeparuser2(iduser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `utilisateur/vehiculeuserrr/${iduser}`)
  }


/////////////////////// SERVICE POUR AFFICHAGE LA DERNIER CARTE GRISE POUR UN VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	
  
getcartegriseVehicule(idvehicule: any):Observable<any>
  {
     console.log("la je suis id de vehicule est "+ idvehicule)
    return this.http.get<any>(  AUTH_API + `cartegrise/vehiculeCarvehicule/${idvehicule}`)
  }

/////////////////////// SERVICE POUR AFFICHAGE LES UTILISATEUR PAR ID DEPUIT LA BASE DE DONNER  /////////////////////////////////	
  
  getutilisateurParid(idappuser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `utilisateur/afficher/${idappuser}`)
  }
}
