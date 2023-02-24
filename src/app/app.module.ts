import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';


import {MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ConnexionComponent } from './connexion/connexion.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { InfractionComponent } from './infraction/infraction.component';
import { PlusvehiculeComponent } from './plusvehicule/plusvehicule.component';
import { DetailutilComponent } from './detailutil/detailutil.component';
import { AjoutervehiculeComponent } from './ajoutervehicule/ajoutervehicule.component';
import { PermisComponent } from './permis/permis.component';
import { CartegriseComponent } from './cartegrise/cartegrise.component';
import { HttpRequestInterceptoService } from './services/http-request-intercepto.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AcceuilComponent,
    SidenavComponent,
    HeaderComponent,
    ConnexionComponent,
    PrincipalComponent,
    UtilisateurComponent,
    VehiculeComponent,
    InfractionComponent,
    PlusvehiculeComponent,
    DetailutilComponent,
    AjoutervehiculeComponent,
    PermisComponent,
    CartegriseComponent
    // AppRoutingModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
   
    ReactiveFormsModule,
    
     // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [HttpRequestInterceptoService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
