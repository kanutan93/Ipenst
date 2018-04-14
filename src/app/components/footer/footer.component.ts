import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  items: any[] = [
    {
      title: 'Решения',
      routerLink: '/solutions'
    },
    {
      title: 'Новости',
      routerLink: '/news'
    },
    {
      title: 'Компания',
      routerLink: '/company'
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
