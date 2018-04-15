import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  searchItems: any[];
  searchItemsLabel: any[];

  smallItems: any[] = [
    {
      title: 'Компания',
      routerLink: '/company',
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
      routerLink: '/solutions',
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
      title: 'Меню',
      routerLink: '/news',
      subitems: [
        {
          title: 'Новости',
          routerLink: '/news'
        },
        {
          title: 'Контакты',
          routerLink: '/contacts'
        }
      ]
    }
  ];
  items: any[] = [
    {
      title: 'Компания',
      routerLink: '/company',
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
      routerLink: '/solutions',
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
  constructor(private searchService: SearchService, private router: Router) {
    this.searchItems = this.searchService.getAllItems();
    this.searchItemsLabel = this.searchItems.map(searchItem => searchItem.title);
  }

  ngOnInit() {

  }
  onSearchSelected(title) {
    const item = this.searchItems.find(searchItem => searchItem.title === title);
    this.router.navigate([item.routerLink]);
  }

}


interface MenuItem {
  title: string;
  routerLink: string;
  subitems?: MenuItem[];
}
