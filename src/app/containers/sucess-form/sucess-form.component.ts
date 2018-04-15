import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess-form',
  templateUrl: './sucess-form.component.html',
  styleUrls: ['./sucess-form.component.scss']
})
export class SucessFormComponent implements OnInit {

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
