import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NbrtotalService } from '../services/nbrtotal.service';
import { StorageService } from '../services/storage.service';

@Component({
  
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
 
  styleUrls: ['./acceuil.component.scss']

  
  
})
export class AcceuilComponent implements OnInit {

  closeResult!: string;
	roles: any;
	vehiculenbr: any;

  // acceuil : acceuil[];

  constructor(private httpclient : HttpClient,private modalService: NgbModal, private nbrtotalservice: NbrtotalService, private storageService: StorageService) {}


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
	  }

	  Nbrvehicle(){
		this.nbrtotalservice.getnbrvehicule().subscribe(data=>{
			this.vehiculenbr=data;
			// this.desciption= this.infraction.desciption;
		  });
	  }
}

