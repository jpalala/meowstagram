import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  open: boolean = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


}
/* Container for the modal, lls ngBModal apis */