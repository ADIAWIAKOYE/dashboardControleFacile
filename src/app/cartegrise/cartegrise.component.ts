import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cartegrise',
  templateUrl: './cartegrise.component.html',
  styleUrls: ['./cartegrise.component.scss']
})
export class CartegriseComponent {

  back(): void {
    window.history.back()
  }


  closeResult!: string;

  // acceuil : acceuil[];

  constructor(private httpclient : HttpClient,private modalService: NgbModal) {}


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

}
