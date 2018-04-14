import { Injectable } from '@angular/core';
import {CompanySectionService} from './company-section.service';
import {NewsSectionService} from './news-section.service';
import {SolutionSectionService} from './solution-section.service';

@Injectable()
export class SearchService {

  constructor(private companySectionService: CompanySectionService,
              private newsSectionService: NewsSectionService,
              private solutionSectionService: SolutionSectionService) {
  }
  getAllItems() {
    return this.solutionSectionService.getItems()
      .concat(this.newsSectionService.getItems())
      .concat(this.companySectionService.getItems())
      .concat([{
        title: 'Компания',
        routerLink: '/company'
      },
        {
          title: 'Решения',
          routerLink: '/solutions'
        },
        {
          title: 'Пресс-центр',
          routerLink: '/news'
        },
        {
          title: 'Контакты',
          routerLink: '/contacts'
        }]
      );
  }
}
