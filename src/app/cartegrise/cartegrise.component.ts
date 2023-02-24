import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LesgetsService } from '../services/lesgets.service';
import { ListesService } from '../services/listes.service';
import { StorageService } from '../services/storage.service';
import { TotalpostService } from '../services/totalpost.service';

@Component({
  selector: 'app-cartegrise',
  templateUrl: './cartegrise.component.html',
  styleUrls: ['./cartegrise.component.scss']
})
export class CartegriseComponent implements OnInit {
	roles: any;
	idappuser: any;
	id: any;
	idvehicule: any;
	idvic: any;
	carte: any;
	filterTerm!: string;

  back(): void {
    window.history.back()
  }


  p: number = 1;



  closeResult!: string;

  // acceuil : acceuil[];

//   constructor(private httpclient : HttpClient,private modalService: NgbModal) {}
  constructor(private route: ActivatedRoute, private listesservice: ListesService, private storageService: StorageService,
    private router: Router, private totalposteservice: TotalpostService, private modalService: NgbModal) {}

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

    this.idappuser = this.route.snapshot.params['idappuser']
    this.id = this.idappuser
    console.log("l'ID utisateur est "+this.idappuser)


	this.idvehicule = this.route.snapshot.params['idvehicule']
    this.idvic = this.idvehicule
    console.log("l'ID vehicule est "+this.idvehicule)

	 	this.AfficherlisteCartegriseVehicule();
    // this.AfficherVehicule();

	  }


	  AfficherlisteCartegriseVehicule(){
		this.listesservice.getlistecartegriseParvehicule(this.idvehicule).subscribe(data=>{
			this.carte=data;

			this.filterTerm = '';

			console.log("les carte gises sont "+this.carte)

			for(let drt of this.carte){
			console.log("la liste des cartegrise est : ", drt)
		   }
		});
	  }

}
