import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  items: any[] = [
    {
      title: 'Аудит информационной безопасности',
      description: 'Комплексный аудит информационной безопасности' +
      ' - первый шаг к построению качественной системы защиты',
      routerLink: '/solutions/audit',
      src: '5342c1f29d80cfd96d069c31006c5727.png',
      background: 'ee06cfa1ae1c1201445567a85a77e9be.png'
    },
    {
      title: 'Аттестованный ЦОД',
      description: 'Предлагаем услугу хостинга сайта в центре обработки данных,' +
      ' аттестованном в соответствии с требованиями безопасности,' +
      ' предъявляемым к государственным информационным системам',
      routerLink: '/solutions/hosting',
      src: '640d348aeb76fba582ccd9f7338f6ef6.png',
      background: 'a8bbaf67e7dced2f0bad75e32240f00c.png'
    },
    {
      title: 'SAM',
      description: 'Набор бизнес-практик, ' +
      'включающих управление и оптимизацию закупок, внедрения, поддержки,' +
      ' использования и вывода из эксплуатации программных приложений внутри организации',
      routerLink: '/solutions/sam',
      src: 'cdd7f95707dbc678399ff9717234c684.png',
      background: 'fb90adaf959a1a7384048f20e5e8468a.png'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSolution(routerLink) {
    this.router.navigate([routerLink]);
  }

}
