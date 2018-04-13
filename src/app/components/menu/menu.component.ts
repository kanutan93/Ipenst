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
          title: 'О компании'
        },
        {
          title: 'Вендоры'
        },
      ]
    },
    {
      title: 'Решения',
      subitems: [
        {
          title: 'Информационная безопасность'
        },
        {
          title: 'Сети передачи данных'
        },
        {
          title: 'Документооборот'
        }
      ]
    },
    {
      title: 'Пресс-центр'
    },
    {
      title: 'Контакты'
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
