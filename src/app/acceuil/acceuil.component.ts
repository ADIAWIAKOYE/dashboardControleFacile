import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListesService } from '../services/listes.service';
import { NbrtotalService } from '../services/nbrtotal.service';
import { StorageService } from '../services/storage.service';
import { TotalpostService } from '../services/totalpost.service';
import Swal from 'sweetalert2'

@Component({
  
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
 
  styleUrls: ['./acceuil.component.scss']

  
  
})
export class AcceuilComponent implements OnInit {

	reloadPage(): void {
		window.location.reload();
	  }

  closeResult!: string;
	roles: any;
	vehiculenbr: any;
	infractionnbr: any;
	utilisateurnbr: any;
	controlleurnbr: any;
	listeadmin: any;
	ajouadmin: any;
	nom!: string;
	prenom!: string;
	adresse!: string;
	telephone: any;
	email: any;
	Message: any;
	stat: any;

  // acceuil : acceuil[];
  p: number = 1;

  constructor(private httpclient : HttpClient,private modalService: NgbModal, private nbrtotalservice: NbrtotalService, private storageService: StorageService,
	private listeservice: ListesService, private totalposteservice: TotalpostService) {}


  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}


	ngOnInit(): void {
		if (this.storageService.isLoggedIn()) {
		  this.roles = this.storageService.getUser().roles;
		}

		this.Nbrvehicle();
		this.Nbrinfraction();
		this.Nbrutilisateur();
		this.Nbrcontrolleur();

		this.ListeAdmin();
	  }

/////////////////////// AFFICHAGE DU NOMBRE DE VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	  
	  Nbrvehicle(){
		this.nbrtotalservice.getnbrvehicule().subscribe(data=>{
			this.vehiculenbr=data;
			// this.desciption= this.infraction.desciption;
		  });
	  }


/////////////////////// AFFICHAGE DU NOMBRE D' INFRACTION DEPUIT LA BASE DE DONNER  /////////////////////////////////	  
	  Nbrinfraction(){
		this.nbrtotalservice.getnbrinfraction().subscribe(data=>{
			this.infractionnbr=data;
			// this.desciption= this.infraction.desciption;
		  });
	  }


/////////////////////// AFFICHAGE DU NOMBRE D' UTILISATEUR DEPUIT LA BASE DE DONNER  /////////////////////////////////	  	  
	  Nbrutilisateur(){
		this.nbrtotalservice.getnbrutilisateur().subscribe(data=>{
			this.utilisateurnbr=data;
			// this.desciption= this.infraction.desciption;
		  });
	  }


/////////////////////// AFFICHAGE DU NOMBRE DE CONTROLLEUR DE VEHICULE DEPUIT LA BASE DE DONNER  /////////////////////////////////	  	  
	  Nbrcontrolleur(){
		this.nbrtotalservice.getnbrcontrolleur().subscribe(data=>{
			this.controlleurnbr=data;
			// this.desciption= this.infraction.desciption;
		  });
	  }

  /////////////////////// AFFICHAGE LA LISTE DES ADMINISTRATEUR DEPUIT LA BASE DE DONNER  /////////////////////////////////	
	  
  ListeAdmin(){
		this.listeservice.getlisteadmin().subscribe(data=>{
			this.listeadmin=data;
			// console.log("la liste des admin est : ", this.listeadmin)


		//   for(let drt of this.listeadmin){
		// 	console.log("la liste des admin est : ", drt)
		//   }
		  });

	  }

    /////////////////////// POSTER UN ADMINISTRATEUR DANS LA BASE DE DONNER  /////////////////////////////////	

	  POSTEADMIN(){
		this.totalposteservice.POSTadmin(this.nom, this.prenom, this.adresse, this.telephone, this.email).subscribe(data=>{
			this.ajouadmin = data;

			this.Message = this.ajouadmin.message
            this.stat = this.ajouadmin.status


			setTimeout (()=>{

				if(this.stat == true){
				  Swal.fire({
					  position: 'center',
					  icon: 'success',
					  heightAuto:false,
					  title: this.Message,
					  showConfirmButton: false,
					   timer: 2500.
					
					})

					location.reload();
			   }else{
				Swal.fire({
				  position: 'center',
				  icon: 'error',
				  heightAuto:false,
				  title: this.Message,
				  showConfirmButton: false,
				   timer: 2500.
				
				})
			   }
  
			  },10)
		})

		this.ListeAdmin();
        
		location.reload;
		//  this.reloadPage();
	  }

}

