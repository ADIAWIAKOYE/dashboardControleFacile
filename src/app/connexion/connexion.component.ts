import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../services/connexion.service';
import { StorageService } from '../services/storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private authService: ConnexionService, private storageService: StorageService, private router: Router) { }

  telephone!: string;
  password!: string;


  form: any = {
    telephone: null,
    password: null
  };


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];



  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }



  onSubmit(): void {
    const { telephone, password } = this.form;

    this.authService.login(telephone, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        
        if (this.storageService.getUser().roles[0] === 'ROLE_ADMIN') {
          this.router.navigate(['/principal/acceuil']);
        }
         else {
          //  this.router.navigate(['/policier']);
          Swal.fire({
            position: 'center',
            icon: 'error',
            heightAuto:false,
            title: 'Vous n\'avez pas le droit d\'access au dashboard',
            showConfirmButton: false,
             timer: 2500.
          })
         }
        // this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      

    });
  }

  reloadPage(): void {
    window.location.reload();
  }


  submit() {
    // Code pour envoyer les données de formulaire au serveur ou les enregistrer localement
    console.log("telephone:", this.telephone);
    console.log("password:", this.password);    
    }


}
