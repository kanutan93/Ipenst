import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent implements OnInit {

  currentItem = 'О компании';
  items: any[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        title: 'О компании',
        routerLink: '/company/about'
      },
      {
        title: 'Вендоры',
        routerLink: '/company/vendors'
      }
    ];
  }

}
