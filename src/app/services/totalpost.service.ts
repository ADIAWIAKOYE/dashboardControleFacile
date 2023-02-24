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
export class TotalpostService {
	PosterPermis(file: any, nom: any, prenom: any, adresse: any, commune: any, profession: any, datenaissance: any, lieunaissance: any, numpermis: any, categoriepermis: any, datedelivrance: any, dateecheance: any) {
		throw new Error('Method not implemented.');
	}

  constructor(private http : HttpClient) { }


    /////////////////////// SERVICE POUR POSTER UN ADMINISTRATEUR DANS LA BASE DE DONNER  /////////////////////////////////	

    POSTadmin(nom: string, prenom: string, adresse: string, telephone: any, email: any ): Observable<any>
    {
      let data =new FormData();
      data.append("nom", nom);
      data.append("prenom", prenom);
      data.append("adresse", adresse);
      data.append("telephone", telephone);
      data.append("email", email);

      console.log("le nom dE l'utilisateur   est "+nom)
      console.log("le prenom l'utilisateur   est "+prenom)
      console.log("le adresse l'utilisateur  est "+adresse)
      console.log("le telephone l'utilisateur  est "+telephone)
      console.log("le mail l'utilisateur  est "+email)

      return this.http.post<any>(  AUTH_API + `auth/sinudminI`, data)
    }


        /////////////////////// SERVICE POUR POSTER UN COMTROLLEUR DE VEHICULE DANS LA BASE DE DONNER  /////////////////////////////////	

        POSTcontrolleur(nom: string, prenom: string, grade: string, adresse: string, telephone: any, email: any, matricule: any ): Observable<any>
        {
          let data =new FormData();
          data.append("nom", nom);
          data.append("prenom", prenom);
          data.append("grade", grade);
          data.append("adresse", adresse);
          data.append("telephone", telephone);
          data.append("email", email);
          data.append("matricule", matricule);
    
          console.log("le nom dE l'utilisateur   est "+nom)
          console.log("le prenom l'utilisateur   est "+prenom)
          console.log("le adresse l'utilisateur  est "+adresse)
          console.log("le telephone l'utilisateur  est "+telephone)
          console.log("le matricule l'utilisateur  est "+matricule)
    
          return this.http.post<any>(  AUTH_API + `auth/sinuPoliceII`, data)
        }


        /////////////////////// SERVICE POUR POSTER UN COMTROLLEUR DE VEHICULE DANS LA BASE DE DONNER  /////////////////////////////////	

        POSTNouvelVehicule(telephone: any, nom: string, prenom: string, adresse: string, commune: string, profession: string, lieunaissance: string, datenaissance: any, 
          plaqueimatri: string, couleur: string, numcartegrise: string, marque: string, genre: string, type: string, chassie: string, carrouserie: string, capacite: string,
          nbplace: any, coutunitaire: any, energie: string, puissancereel: any, puissanceadmin: any, dpmc: any, datedelivrance: any, dateecheance: any, ptac: any, pv: any): Observable<any>
        {
          let data =new FormData();
          data.append("nom", nom);
          data.append("prenom", prenom);
          data.append("adresse", adresse);
          data.append("commune", commune);
          data.append("profession", profession);
          data.append("lieunaissance", lieunaissance);
          data.append("datenaissance", datenaissance);

          data.append("plaqueimatri", plaqueimatri);
          data.append("couleur", couleur);
          data.append("numcartegrise", numcartegrise);
          data.append("marque", marque);
          data.append("genre", genre);
          data.append("type", type);
          data.append("chassie", chassie);
          data.append("capacite", capacite);

          data.append("carrouserie", carrouserie);
          data.append("nbplace", nbplace);
          data.append("coutunitaire", coutunitaire);
          data.append("energie", energie);
          data.append("puissancereel", puissancereel);
          data.append("puissanceadmin", puissanceadmin);
          data.append("dpmc", dpmc);
          data.append("datedelivrance", datedelivrance);
          data.append("dateecheance", dateecheance);
          data.append("ptac", ptac);
          data.append("pv", pv);
    
          console.log("le nom dE l'utilisateur   est "+nom)
          console.log("le prenom l'utilisateur   est "+prenom)
          console.log("le adresse l'utilisateur  est "+adresse)
          console.log("le telephone l'utilisateur  est "+telephone)
          console.log("le matricule l'utilisateur  est "+plaqueimatri)
          console.log("le date de delivrance  est "+datedelivrance)
          console.log("le date de DPMC  est "+dpmc)
          return this.http.post<any>(  AUTH_API + `admin/ajouterCartegriseVehicule2/${telephone}`, data)
        }    
        
        


  /////////////////////// SERVICE POUR POSTER UN COMTROLLEUR DE VEHICULE DANS LA BASE DE DONNER  /////////////////////////////////	

  POSTpermis(file: File, nom: string, prenom: string, adresse: string, commune: string, profession: string, datenaissance: any, lieunaissance: string,
    numpermis: string, categoriepermis: string, datedelivrance: any, dateecheance: any ): Observable<any>
    {
       let data =new FormData();
       data.append("file", file);
       data.append("nom", nom);
       data.append("prenom", prenom);
       data.append("adresse", adresse);
       data.append("commune", commune);
       data.append("profession", profession);
       data.append("datenaissance", datenaissance);
       data.append("lieunaissance", lieunaissance);
       data.append("numpermis", numpermis);
       data.append("categoriepermis", categoriepermis);
       data.append("datedelivrance", datedelivrance);
       data.append("dateecheance", dateecheance);
            
       console.log("le nom dE l'utilisateur   est "+nom)
       console.log("le prenom l'utilisateur   est "+prenom)
       console.log("le adresse l'utilisateur  est "+adresse)
       console.log("la date de naissance  est "+datenaissance)
       console.log("la date de delivrance  est "+datedelivrance)
       console.log("la date de d'echeance  est "+dateecheance)
            
       return this.http.post<any>(  AUTH_API + `permis/save`, data)
      }
        
  
}
