import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PicModal } from '../picmodal';
import { CatpicsService } from '../catpics.service';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  open: boolean;
  model: PicModal = new PicModal();
  pic: PicModal;
  id: string;
  constructor(public activeModal: NgbActiveModal, private catService: CatpicsService) { }

  ngOnInit(): void {
    this.catService.getPic(this.id).subscribe(data => {
      this.pic = data;
    });
  }

  updateCaption(id) {
 //   if (todoObj.id && todoObj.id !== null) {
    this.catService.getPic(id).subscribe(data => {
      this.pic = data;
      this.pic.caption = 'A caption';
      this.catService.updatePic(this.pic).subscribe(data1 => {
        return data1;
      });
    });
    this.activeModal.close('Updated caption');
  }
}
/* Container for the modal, lls ngBModal apis */