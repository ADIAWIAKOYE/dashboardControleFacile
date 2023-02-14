import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
    { path: '', redirectTo: 'connexion', pathMatch: 'full' },

     { path: 'connexion', component: ConnexionComponent },

    { path: '', component: PrincipalComponent,
     children: [
    { path: 'acceuil', component: AcceuilComponent },
    { path: 'dashboard', component: DashboardComponent },

  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
