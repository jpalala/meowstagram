import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PicModal } from '../picmodal';
import { CatpicsService } from '../catpics.service';


@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  @Input() public id: string;
  @Input() public caption: string;
  @Input() public image: string;
  @Input() public picObj: any;

  open: boolean;
  model: PicModal;

  constructor(public activeModal: NgbActiveModal, private catpicsService: CatpicsService) {  }

  ngOnInit(): void {
    const newPicObj  = new PicModal(this.id, this.caption, this.image); //create a new copy?
    console.log('New Data! ', newPicObj);
    this.model = newPicObj;
  }

  updateCaption(id: string) {
 //   if (todoObj.id && todoObj.id !== null) {
    this.catpicsService.getPic(id).subscribe(data => {
      this.model = data;
      this.model.caption = 'A caption';
      this.catpicsService.updatePic(this.model).subscribe(data1 => {
        return data1;
      });
    });
    this.activeModal.close('Updated caption');
  }
}
/* Container for the modal, lls ngBModal apis */