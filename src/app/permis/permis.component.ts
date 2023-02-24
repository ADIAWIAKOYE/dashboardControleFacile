import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ListesService } from '../services/listes.service';
import { StorageService } from '../services/storage.service';
import { TotalpostService } from '../services/totalpost.service';

@Component({
  selector: 'app-permis',
  templateUrl: './permis.component.html',
  styleUrls: ['./permis.component.scss']
})
export class PermisComponent implements OnInit  {
	p: number = 1;
  closeResult!: string;
	permis: any;
	filterTerm!: string;
	roles: any;
	file: any;
	nom: any;
	prenom: any;
	adresse: any;
	commune: any;
	profession: any;
	datenaissance: any;
	lieunaissance: any;
	dateecheance: any;
	datedelivrance: any;
	categoriepermis: any;
	numpermis: any;
	postpermis: any;
	Message: any;
	stat: any;

  back(): void {
    window.history.back()
  }
 
  constructor(private httpclient : HttpClient, private storageService: StorageService, private modalService: NgbModal,
	 private listeservice: ListesService, private postetotalservice: TotalpostService) {}


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
		//  this.Nbrvehicle();
		 this.listedespermis();
		}


	listedespermis(){
        this.listeservice.getlisterpermis().subscribe(data=>{
          this.permis=data;

          this.filterTerm = '';
        })
      }

	  fileChang(event:any){
		this.file=event.target["files"][0]
		
		console.log("azertyusdfghjxcvbnfghj",this.file)
	  }

	  forme: any = {
		nom: null,
		prenom: null,
		adresse: null,
		commune: null,
		profession: null,
		datenaissance: null,
		lieunaissance: null,
		numpermis: null,
		categoriepermis: null,
		datedelivrance: null,
		dateecheance: null,
	  };

	  PosterPermis(){
		const { 
			nom,
			prenom,
			adresse,
			commune,
			profession,
			datenaissance,
		    lieunaissance,
		    numpermis,
		    categoriepermis,
		    datedelivrance,
		    dateecheance} = this.forme;
		
			if(adresse==null){
			  this.forme.adresse=" ";
			}
			if(nom==null){
			  this.forme.nom=" ";
			}
			if(prenom==null){
			  this.forme.prenom=" ";
			}
			if(datenaissance==null){
			  this.forme.datenaissance=" ";
			}
			if(commune==null){
			  this.forme.commune=" ";
			}
			if(profession==null){
			  this.forme.profession=" ";
			}
			if(lieunaissance==null){
				this.forme.lieunaissance=" ";
			}
			if(numpermis==null){
			this.forme.numpermis=" ";
			}
			if(categoriepermis==null){
			this.forme.categoriepermis=" ";
			}
			if(datedelivrance==null){
			this.forme.datedelivrance=" ";
			}
			if(dateecheance==null){
			this.forme.dateecheance=" ";
			}

         this.postetotalservice.POSTpermis(this.file, this.nom, this.prenom, this.adresse, this.commune, this.profession, this.datenaissance, this.lieunaissance,
			this.numpermis, this.categoriepermis, this.datedelivrance, this.dateecheance).subscribe(data=>{
			this.postpermis = data;

			this.Message = this.postpermis.message
            this.stat = this.postpermis.status


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
					// location.reload();

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
	  }
}
