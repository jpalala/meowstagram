import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let pics = [
      { id: '1591715036975', image: "catpic001.jpg", caption: "A picture of a cat" },
      { id: '1591715036976', image: "catpic001.jpg", caption: "A picture of a cat" },
      { id: '1591715036977', image: "catpic001.jpg", caption: "A picture of a cat" },
      { id: '1591715036978', image: "catpic001.jpg", caption: "A picture of a cat" },
      { id: '1591715036979', image: "catpic001.jpg", caption: "A picture of a cat" },
      { id: '1591715036980', image: "catpic001.jpg", caption: "A picture of a cat" }
    ];
    return { pics };
  }

}
