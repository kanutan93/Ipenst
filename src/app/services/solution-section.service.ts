import { Injectable } from '@angular/core';

@Injectable()
export class SolutionSectionService {

  items = [
    {
      title: 'Тест на проникновение',
      routerLink: '/solutions/penetration'
    },
    {
      title: 'Защита АСУТП',
      routerLink: '/solutions/asutp'
    },
    {
      title: 'Аудит',
      routerLink: '/solutions/audit'
    },
    {
      title: 'Сетевая безопасность',
      routerLink: '/solutions/security'
    },
    {
      title: 'SAM',
      routerLink: '/solutions/sam'
    },
    {
      title: 'Аттестованный хостинг',
      routerLink: '/solutions/hosting'
    }
  ]
  constructor() { }
  getItems() {
    return this.items;
  }

}
