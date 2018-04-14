import { Injectable } from '@angular/core';

@Injectable()
export class NewsSectionService {

  items = [
    {
      title: 'Новости',
      routerLink: '/news'
    }
  ];
  constructor() { }
  getItems() {
    return this.items;
  }

}
