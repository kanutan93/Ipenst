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
          title: 'Лицензия и сертификаты'
        },
        {
          title: 'Отзывы клиентов'
        },
        {
          title: 'Вендоры'
        },
        {
          title: 'Вакансии'
        },
        {
          title: 'Реквизиты'
        }
      ]
    },
    {
      title: 'Решения',
      subitems: [
        {
          title: 'Информационная безопасность'
        },
        {
          title: 'Microsoft'
        },
        {
          title: 'Сети передачи данных'
        },
        {
          title: 'Коммуникации'
        },
        {
          title: 'Облака'
        },
        {
          title: 'Документооборот'
        },
        {
          title: 'Решения по телефонизации компаний'
        },
      ]
    },
    {
      title: 'Пресс-центр'
    },
    {
      title: 'Учебный центр'
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
