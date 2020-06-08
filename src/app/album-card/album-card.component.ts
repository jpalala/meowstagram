import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() image: string = '../../assets/images/cat001.jpg';
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

  //STUB
  onClickView(picId) {

  }

  //STUB
  onClickEdit(picId) {

  }

}
