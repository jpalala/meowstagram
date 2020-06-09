import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PicModal } from '../picmodal';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  open: boolean;
  model: PicModal = new PicModal();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

  }

}
/* Container for the modal, lls ngBModal apis */