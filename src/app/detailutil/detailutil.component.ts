import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LesgetsService } from '../services/lesgets.service';
import { StorageService } from '../services/storage.service';
import { TotalpostService } from '../services/totalpost.service';

@Component({
  selector: 'app-detailutil',
  templateUrl: './detailutil.component.html',
  styleUrls: ['./detailutil.component.scss']
})
export class DetailutilComponent implements OnInit {
  roles: any;
  id: any;
  idappuser: any;
  perm: any;
  perminom: any;
  perminum: any;
  permiprenom: any;
  permidatenaissance: any;
  permilieunaissance: any;
  permicommun: any;
  permidomicile: any;
  permiprofession: any;
  permidatelivraison: any;
  permidateecheance: any;
  permiprofile: any;
  permicategorie: any;
  vehicule: any;
  vicule: any;
  idve: any;
  vehic: any;
  marq: any;
  genr: any;
  typ: any;
  idv: any;
  vehicule2: any;

  back(): void {
    window.history.back()
  }

  constructor(private route: ActivatedRoute, private lesgetservice: LesgetsService, private storageService: StorageService,
    private router: Router, private totalposteservice: TotalpostService) {}

  ngOnInit(): void {
		if (this.storageService.isLoggedIn()) {
		  this.roles = this.storageService.getUser().roles;
		}

    this.idappuser = this.route.snapshot.params['idappuser']
    this.id = this.idappuser
    console.log("l'ID utilisateur est "+this.idappuser)


		this.afficherpermis();
    this.AfficherVehicule();
    this.AfficherVehicule2();
	  }

    goToajoutervehicule(idi:number){
      return this.router.navigate(['/principal/ajoutervehicule', idi])
    }


    afficherpermis(){
    this.lesgetservice.getpermisparuser(this.idappuser).subscribe(data=>{
    this.perm=data;
    this.perminom=this.perm.permis.nom;
    this.perminum=this.perm.permis.numpermis;
    this.permiprenom=this.perm.permis.prenom;
    this.permidatenaissance=this.perm.permis.datenaissance;
    this.permilieunaissance=this.perm.permis.lieunaissance;
    this.permicommun=this.perm.permis.commune;
    this.permidomicile=this.perm.permis.domicile;
    this.permiprofession=this.perm.permis.profession;
    this.permidatelivraison=this.perm.permis.datedelivrance;
    this.permidateecheance=this.perm.permis.dateecheance;
    this.permiprofile=this.perm.permis.profilepermis;
    this.permicategorie=this.perm.permis.categoriepermis

    console.log("permis est "+this.perm.permis.nom )
    console.log("permis est "+this.perm.permis.numpermis )

    console.log("data est "+this.perm)
  });
}

vtre:any = []

AfficherVehicule2(){
  this.lesgetservice.getvehiculeparuser2(this.idappuser).subscribe(data=>{
    this.vehicule2=data;
    console.log("id vehicule est "+ data)
  })
}

AfficherVehicule(){
  this.lesgetservice.getvehiculeparuser(this.idappuser).subscribe(data=>{
    this.vehicule=data;
    this.vicule= this.vehicule.idvehicule;
    console.log("id vehicule est "+ data)

for(let vehicle of this.vehicule){
 console.log("les vehicules sont "+vehicle)
 console.log("id vehicule est "+vehicle.idvehicule)
 this.idve = vehicle.idvehicule;   
 this.lesgetservice.getcartegriseVehicule(this.idve).subscribe(data=>{
  this.vehic=data;
  this.marq=this.vehic.marque;
  this.genr=this.vehic.genre;
  this.typ=this.vehic.type;
  this.vtre.push(data)
  this.idv=this.vehic.idvehicule;
  console.log("la marque est "+this.marq)
  console.log("la genre est "+this.genr)
  console.log("la genre est "+this.typ)
  console.log("la id vehicule est "+this.idve)

  console.log("la cartegrise est "+this.vehic)
});
}
   
   
  });
}

ddzdsds(idves: any){
  for(let hicle of this.vehic){
    if(hicle.idvehicule === idves){

      return hicle;
    }
    console.log("la cartegrise est "+hicle)
}

}

}
