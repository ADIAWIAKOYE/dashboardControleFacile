import { Component, OnInit } from '@angular/core';
import { ListesService } from '../services/listes.service';
import { NbrtotalService } from '../services/nbrtotal.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-infraction',
  templateUrl: './infraction.component.html',
  styleUrls: ['./infraction.component.scss']
})
export class InfractionComponent  implements OnInit {
  roles: any;
  infractionnbr: any;

  constructor(private nbrtotalservice: NbrtotalService, private storageService: StorageService,
    private listeservice: ListesService) {}




    ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
        this.roles = this.storageService.getUser().roles;
      }
      this.Nbrinfraction()
    }

 /////////////////////// AFFICHAGE DU NOMBRE D' INFRACTION DEPUIT LA BASE DE DONNER  /////////////////////////////////	  
  Nbrinfraction(){
		this.nbrtotalservice.getnbrinfraction().subscribe(data=>{
			this.infractionnbr=data;
			// this.desciption= this.infraction.desciption;
		  });
	  }

}
