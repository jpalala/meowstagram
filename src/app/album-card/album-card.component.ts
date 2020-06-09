import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() image: string = '../../assets/images/cat001.jpg';
  @Input() description: string;
  picId: string;

  constructor(private el: ElementRef, private modalService: NgbModal ) { }

  // Removed angular div wrapper
  // https://stackoverflow.com/a/59009696
  ngOnInit() {
    let myCardDiv: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = myCardDiv.parentElement;
    // get all children and move them out of the element
    while (myCardDiv.firstChild) {
      parentElement.insertBefore(myCardDiv.firstChild, myCardDiv);
    }

    this.picId = '1';
    // remove the empty element(the host)
    parentElement.removeChild(myCardDiv);
  }

  //STUB
  onClickView(picId: any) {
    const modalRef = this.modalService.open(ModalContainerComponent);
    modalRef.componentInstance.name = 'Pic_' + picId;
    alert(picId);
  }

  //STUB
  onClickEdit(picId) {

  }

}
