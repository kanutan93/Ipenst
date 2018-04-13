import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  items: any[] = [
    {
      title: 'Решения'
    },
    {
      title: 'Новости'
    },
    {
      title: 'Компания'
    },
    {
      title: 'Контакты'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
