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
export class ListesService {

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + localStorage.getItem('token') // remplacez 'token' par le token d'authentification valide
  //   })
  // };

  constructor(private http : HttpClient) { }


  /////////////////////// SERVICE POUR AFFICHAGE LA LISTE DES ADMINISTRATEUR DEPUIT LA BASE DE DONNER  /////////////////////////////////	 
  getlisteadmin(): Observable<any>
  {
    return this.http.get(  AUTH_API + `admin/afficher`, httpOptions)
  }


  /////////////////////// SERVICE POUR AFFICHAGE LA LISTE DES CONTROLLEUR DE VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	 
  getlistecontrolleur(): Observable<any>
  {
    return this.http.get(  AUTH_API + `policier/afficher`, httpOptions)
  }


    /////////////////////// SERVICE POUR AFFICHAGE LA LISTE DES UTILISATEUR DE VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	 
  getlisteutilisateur(): Observable<any>
  {
    return this.http.get(  AUTH_API + `utilisateur/afficher`, httpOptions)
  }



  /////////////////////// SERVICE POUR AFFICHAGE LA LISTE DES CARTEGRISE PAR VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	 
  getlistecartegriseParvehicule(idvehicule: any): Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `cartegrise/afficherParVehicule/${idvehicule}`, httpOptions)
  }

  /////////////////////// SERVICE POUR AFFICHAGE LA LISTE DES VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	 
 
  getlistervehicule():Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `vehicule/afficher`)
  }

///////////////////////////////////////////////////////////////////////////////////////////
  getlistervehicule2():Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `vehicule/findallVehicul`)
  }

  /////////////////////// SERVICE POUR AFFICHAGE LA LISTE DES PERMIS DEPUIT LA BASE DE DONNER  /////////////////////////////////
  getlisterpermis():Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `permis/afficher`)
  }
}
