import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LesgetsService } from '../services/lesgets.service';
import { ListesService } from '../services/listes.service';
import { StorageService } from '../services/storage.service';
import { TotalpostService } from '../services/totalpost.service';
import Swal from 'sweetalert2'
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ajoutervehicule',
  templateUrl: './ajoutervehicule.component.html',
  styleUrls: ['./ajoutervehicule.component.scss']
})
export class AjoutervehiculeComponent implements OnInit  {
  roles: any;
  id: any;
  idappuser: any;
  utilisateur: any;
  nomu: any;
  prenomu: any;
  domicileu: any;
  datenaissanceu: any;
  lieunaissanceu: any;
  professionu: any;
  communeu: any;
  telephoneu: any;
  profilu: any;
  nvlvehicule: any;
  Message: any;
  stat: any;
  nom!: string;
  prenom!: string;
  adresse!: string;
  commune!: string;
  carrouserie!: string;
  profession!: string;
  capacite!: string;
  lieunaissance!: string;
  datenaissance: any;
  ptac: any;
  pv: any;
  dateecheance: any;
  datedelivrance: any;
  chassie!: string;
  dpmc: any;
  type!: string;
  puissanceadmin: any;
  genre!: string;
  puissancereel: any;
  marque!: string;
  numcartegrise!: string;
  energie!: string;
  coutunitaire: any;
  couleur!: string;
  plaqueimatri!: string;
  nbplace: any;
  datenaiss: any;
  datedelivre: any;
  datechean: any;
  datDPMC: any;

  back(): void {
    window.history.back()
  }

  constructor(private route: ActivatedRoute, private lesgetservice: LesgetsService, private storageService: StorageService,
    private totalposteservice: TotalpostService) {}

  ngOnInit(): void {
		if (this.storageService.isLoggedIn()) {
		  this.roles = this.storageService.getUser().roles;
		}

    this.idappuser = this.route.snapshot.params['idappuser']
    this.id = this.idappuser
    console.log("l'ID est "+this.id)

		this.AfficherUtilisateurParId();
	  }


    AfficherUtilisateurParId(){
      this.lesgetservice.getutilisateurParid(this.idappuser).subscribe(data=>{
        this.utilisateur=data;
        this.nomu=this.utilisateur.nom;
        this.prenomu=this.utilisateur.prenom;
        this.domicileu=this.utilisateur.domicile;
        this.datenaissanceu=this.utilisateur.datenaissance;
        this.lieunaissanceu=this.utilisateur.lieunaissance;
        this.professionu=this.utilisateur.profession;
        this.communeu=this.utilisateur.commune;
        this.telephoneu=this.utilisateur.telephone;
        this.profilu=this.utilisateur.profile;  
        console.log("la nom est "+this.nomu)
        console.log("la prenom est "+this.prenomu)
        console.log("la domicile est "+this.domicileu)
        console.log("le numero de l'utilisateur est "+this.telephoneu)
      });

    }

PosteVehiculePourUtilisateur(){

 console.log("la date  est "+this.datedelivrance)

  let dqte=new Date(this.datedelivrance)

  this.datedelivre = dqte.getDate()+"/"+(dqte.getMonth()+1)+"/"+dqte.getFullYear();

  console.log("la date  delivre est "+this.datedelivre)

  let dateE=new Date(this.dateecheance)

   this.datechean = dateE.getDate()+"/"+(dateE.getMonth()+1)+"/"+dateE.getFullYear();

  console.log("la date Echeanse  est "+this.datechean)

  let datedpmc=new Date(this.dpmc)

 this.datDPMC = datedpmc.getDate()+"/"+(datedpmc.getMonth()+1)+"/"+datedpmc.getFullYear();

  console.log("la date Echeanse  est "+this.datDPMC)


  let naiss=new Date(this.datenaissance)

  this.datenaiss = naiss.getDate()+"/"+(naiss.getMonth()+1)+"/"+naiss.getFullYear();

  console.log("la date Echeanse  est "+this.datenaiss)

  this.totalposteservice.POSTNouvelVehicule(this.telephoneu, this.nom, this.prenom, this.adresse, this.commune, this.profession, this.lieunaissance, this.datenaissance, 
    this.plaqueimatri, this.couleur, this.numcartegrise, this.marque, this.genre, this.type, this.chassie, this.carrouserie, this.capacite,
    this.nbplace, this.coutunitaire, this.energie, this.puissancereel, this.puissanceadmin, this.dpmc, this.datedelivrance, this.dateecheance, this.ptac, this.pv).subscribe(data=>{

      this.nvlvehicule = data;

      this.Message = this.nvlvehicule.message
      this.stat = this.nvlvehicule.status


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

}


}
