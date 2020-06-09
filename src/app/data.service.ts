import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let pics = [
      { id: '1591715036975', image: "catpic001.jpg", completed: false },
      { id: '1591715036976', image: "catpic002.jpg", completed: false },
      { id: '1591715036977', image: "catpic003.jpg", completed: false }
    ];
    return { pics };
  }

}
