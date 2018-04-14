import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  searchItems: any[];
  searchItemsLabel: any[];
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
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.searchItems = this.searchService.getAllItems();
    this.searchItemsLabel = this.searchItems.map(searchItem => searchItem.title);
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
