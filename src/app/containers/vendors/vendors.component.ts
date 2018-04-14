import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  currentItem = 'Вендоры';
  items: any[];
  vendors: any[] = [
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    },
    {
      title: 'Fortinet',
      routerLink: 'company/vendors/fortinet',
      imageSrc: 'assets/vendors/1.gif',
    }
  ]
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
