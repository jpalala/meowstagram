import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let catpics = [
      { id: '1591715036975', image: "cat001.jpg", caption: "A picture of a cat" },
      { id: '1591715036976', image: "cat002.jpg", caption: "A picture of a cat" },
      { id: '1591715036976', image: "cat001.jpg", caption: "A picture of a cat" },
      { id: '1591715036976', image: "cat001.jpg", caption: "A picture of a cat" },
      { id: '1591715036977', image: "cat001.jpg", caption: "A picture of a cat" },
      { id: '1591715036978', image: "cat001.jpg", caption: "A picture of a cat" },
      { id: '1591715036979', image: "cat001.jpg", caption: "A picture of a cat" },
      { id: '1591715036980', image: "cat001.jpg", caption: "A picture of a cat" },
      { id: '1591715036981', image: "cat001.jpg", caption: "A picture of a cat" }

    ];
    return { catpics };
  }

}
