import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: any[] = [
    {
      title: 'Компания',
      subitems: [
        {
          title: 'О компании',
          routerLink: '/company/about'
        },
        {
          title: 'Вендоры',
          routerLink: '/company/vendors'
        },
      ]
    },
    {
      title: 'Решения',
      subitems: [
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
    },
    {
      title: 'Пресс-центр',
      routerLink: '/news'
    },
    {
      title: 'Контакты',
      routerLink: '/contacts'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}


interface MenuItem {
  title: string;
  routerLink: string;
  subitems?: MenuItem[];
}
