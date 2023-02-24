import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListesService } from '../services/listes.service';
import { StorageService } from '../services/storage.service';
import Swal from 'sweetalert2'
import { TotalpostService } from '../services/totalpost.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  closeResult!: string;
	listecontrolleur: any;
	roles: any;
	prenom!: string;
	adresse!: string;
	nom!: string;
	telephone: any;
	matricule: any;
	ajoucontrolleur: any;
	Message: any;
	stat: any;
	email: any;
	grade!: string;
	filterTerm!: string;

  // acceuil : acceuil[];
  p: number = 1;
  
  constructor(private httpclient : HttpClient,private modalService: NgbModal, private listeservice: ListesService, private storageService: StorageService,
	 private totalposteservice: TotalpostService) {}


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

		this.ListeControlleur();
	  }


	ListeControlleur(){
		this.listeservice.getlistecontrolleur().subscribe(data=>{
			this.listecontrolleur=data;

			this.filterTerm = '';

			 console.log("la liste des controlleurs est : ", this.listecontrolleur)


		//   for(let drt of this.listeadmin){
		// 	console.log("la liste des admin est : ", drt)
		//   }

		  });

	  }


//////////////////////////// POSTER UN ADMINISTRATEUR DANS LA BASE DE DONNER  /////////////////////////////////

	  POSTECONTROLLEUR(){
		this.totalposteservice.POSTcontrolleur(this.nom, this.prenom, this.grade, this.adresse, this.telephone, this.email, this.matricule ).subscribe(data=>{
			this.ajoucontrolleur = data;

			this.Message = this.ajoucontrolleur.message
            this.stat = this.ajoucontrolleur.status


			setTimeout (()=>{

				if(this.stat == true){
				  Swal.fire({
					  position: 'center',
					  icon: 'success',
					  heightAuto:false,
					  title: this.Message,
					  showConfirmButton: false,
					   timer: 3500.
					
					})
					location.reload();

			   }else{
				Swal.fire({
				  position: 'center',
				  icon: 'error',
				  heightAuto:false,
				  title: this.Message,
				  showConfirmButton: false,
				   timer: 3500.
				
				})
			   }
  
			  },10)
		})

		this.ListeControlleur();


		//  this.reloadPage();
	  }
	// ListeAdmin() {
	// 	throw new Error('Method not implemented.');
	// }

}
