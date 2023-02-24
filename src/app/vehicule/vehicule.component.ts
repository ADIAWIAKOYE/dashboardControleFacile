import { Component, OnInit } from '@angular/core';
import { ListesService } from '../services/listes.service';
import { NbrtotalService } from '../services/nbrtotal.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {

  p: number = 1;
  roles: any;
  vehicul: any;
  filterTerm!: string;
  vehiculenbr: any;

  constructor(private nbrtotalservice: NbrtotalService, private storageService: StorageService,
    private listeservice: ListesService) {}
  

    ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
        this.roles = this.storageService.getUser().roles;
      }
        this.Nbrvehicle();
       this.listedesvehicule();
      }


      listedesvehicule(){
        this.listeservice.getlistervehicule2().subscribe(data=>{
          this.vehicul=data;

          this.filterTerm = '';
        })
      }

 /////////////////////// AFFICHAGE DU NOMBRE DE VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	  
	  Nbrvehicle(){
      this.nbrtotalservice.getnbrvehicule().subscribe(data=>{
        this.vehiculenbr=data;
        // this.desciption= this.infraction.desciption;
        });
      }
}
