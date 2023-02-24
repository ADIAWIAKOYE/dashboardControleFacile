import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListesService } from '../services/listes.service';
import { NbrtotalService } from '../services/nbrtotal.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {


  p: number = 1;
  roles: any;
  utilisateurnbr: any;
  listeutilisateur: any;
  filterTerm!: string;

  constructor(private httpclient : HttpClient, private nbrtotalservice: NbrtotalService, private storageService: StorageService,
	private listeservice: ListesService) {}


  ngOnInit(): void {
		if (this.storageService.isLoggedIn()) {
		  this.roles = this.storageService.getUser().roles;
		}
     this.Nbrutilisateur();
		this.ListeUtilisateur();
	  }


    /////////////////////// AFFICHAGE DU NOMBRE D' UTILISATEUR DEPUIT LA BASE DE DONNER  /////////////////////////////////	  	  
	  Nbrutilisateur(){
      this.nbrtotalservice.getnbrutilisateur().subscribe(data=>{
        this.utilisateurnbr=data;
        // this.desciption= this.infraction.desciption;
        });
      }


      ListeUtilisateur(){
        this.listeservice.getlisteutilisateur().subscribe(data=>{
          this.listeutilisateur=data;
    
          this.filterTerm = '';
    
           console.log("la liste des utilisateurs est : ", this.listeutilisateur)
    
    
        //   for(let drt of this.listeadmin){
        // 	console.log("la liste des admin est : ", drt)
        //   }
    
          });
    
        }

}
