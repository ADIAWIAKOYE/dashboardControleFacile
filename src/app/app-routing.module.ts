import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutervehiculeComponent } from './ajoutervehicule/ajoutervehicule.component';
import { CartegriseComponent } from './cartegrise/cartegrise.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailutilComponent } from './detailutil/detailutil.component';
import { HeaderComponent } from './header/header.component';
import { InfractionComponent } from './infraction/infraction.component';
import { PermisComponent } from './permis/permis.component';
import { PlusvehiculeComponent } from './plusvehicule/plusvehicule.component';
import { PrincipalComponent } from './principal/principal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { VehiculeComponent } from './vehicule/vehicule.component';

const routes: Routes = [
    { path: '', redirectTo: 'connexion', pathMatch: 'full' },

     { path: 'connexion', component: ConnexionComponent },

    { path: 'principal', component: PrincipalComponent,
     children: [
    { path: 'acceuil', component: AcceuilComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'utilisateur', component: UtilisateurComponent },
    { path: 'vehicule', component: VehiculeComponent },
    { path: 'infraction', component: InfractionComponent },
    { path: 'plusvehicule', component: PlusvehiculeComponent },
    { path: 'detailutil/:idappuser', component: DetailutilComponent },
    { path: 'ajoutervehicule/:idappuser', component: AjoutervehiculeComponent },
    { path: 'permis', component: PermisComponent },
    { path: 'cartegrise/:idappuser/:idvehicule', component: CartegriseComponent },
    { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
    { path: '**', redirectTo: 'acceuil', pathMatch: 'full' },
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
