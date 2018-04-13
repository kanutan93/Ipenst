import { Component, OnInit } from '@angular/core';
import {a} from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any[] = [
    {
      imgSrc: '1.jpg',
      title: 'Тест на проникновение',
      description: 'Тесты на проникновение мы проводим, используя' +
      ' OSSTMM методику для соответствия качества работ международным стандартам'
    },
    {
      imgSrc: '2.jpg',
      title: 'Защита АСУТП',
      description: 'В рамках построения проектов по защите КСИИ' +
      ' и АСУТП работы  проводятся в соответствии с требованиями законодательства'
    },
    {
      imgSrc: '3.jpg',
      title: 'Аудит',
      description: 'Комплексный аудит для определения актуальных' +
      ' рисков информ безопасности и формирование плана работ по их снижению'
    },
    {
      imgSrc: '4.jpg',
      title: 'Сетевая безопасность',
      description: 'Построение систем сетевой безопасности под ключ – от аудита и проектирования, до построения ее комплексной системы'
    },
    {
      imgSrc: '5.jpg',
      title: 'SAM',
      description: 'Методология, объединяющая эффективные технологии ' +
      'и процедуры управления программными активами и оптимизации их использования'
    },
    {
      imgSrc: '6.jpg',
      title: 'Аттестованный хостинг',
      description: 'Выполнение специального аудиторского задания' +
      ' по рассмотрению бухгалтерских и налоговых отчетов экономического субъекта.'
    },
  ];
  news: any[] = [
    {
      imgSrc: '1.jpg',
      title: 'Шифровальщик WannaCry'
    },
    {
      imgSrc: '2.jpg',
      title: 'Омскгражданпроект защищает данные с помощью Falcongaze SecureTower'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
