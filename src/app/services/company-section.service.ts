import { Injectable } from '@angular/core';

@Injectable()
export class CompanySectionService {
  items = [
    {
      title: 'О компании',
      routerLink: '/company/about'
    },
    {
      title: 'Вендоры',
      routerLink: '/company/vendors'
    }
  ];
  constructor() { }

  getItems() {
    return this.items;
  }
}
