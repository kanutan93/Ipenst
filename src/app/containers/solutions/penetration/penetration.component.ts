import { Component, OnInit } from '@angular/core';
import {SolutionSectionService} from '../../../services/solution-section.service';

@Component({
  selector: 'app-penetration',
  templateUrl: './penetration.component.html',
  styleUrls: ['./penetration.component.scss']
})
export class PenetrationComponent implements OnInit {

  currentItem = 'Тест на проникновение';
  items: any[];
  constructor(private solutionSectionService: SolutionSectionService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.items = this.solutionSectionService.getItems();
  }

}
