import { Component } from '@angular/core';

@Component({
  selector: 'app-ajoutervehicule',
  templateUrl: './ajoutervehicule.component.html',
  styleUrls: ['./ajoutervehicule.component.scss']
})
export class AjoutervehiculeComponent {

  back(): void {
    window.history.back()
  }


}
