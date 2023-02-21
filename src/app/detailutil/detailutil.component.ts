import { Component } from '@angular/core';

@Component({
  selector: 'app-detailutil',
  templateUrl: './detailutil.component.html',
  styleUrls: ['./detailutil.component.scss']
})
export class DetailutilComponent {

  back(): void {
    window.history.back()
  }

}
