import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {
  @Input() title = '';
  @Input() message = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

// ====== Sample Implementation =======
// deleteQuote() {
//   const modalRef = this.modalService.open(ModalConfirmComponent);

//   modalRef.componentInstance.title = 'DELETE';
//   modalRef.componentInstance.message = `Are you sure you want to delete the quote: "${this.quote.quoteText}"`;
//   modalRef.result.then((data) => {
//     console.log(data);
//     if (data) {
//       this.quotesService.delete(this.quote._id).subscribe(res => console.log(res));
//       this.onDelete.emit(this.quote);
//     }
//   }, (reason) => {
//     // console.log(reason);
//   });
//   //
// }


//   private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return `with: ${reason}`;
//   }
// }
