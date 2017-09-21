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
