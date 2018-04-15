import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  items: any[] = [
    {
      title: 'Компания',
      routerLink: '/company',
    },
    {
      title: 'Решения',
      routerLink: '/solutions',
    },
    {
      title: 'Пресс-центр',
      routerLink: '/news'
    },
    {
      title: 'Контакты',
      routerLink: '/contacts'
    }];
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

}
