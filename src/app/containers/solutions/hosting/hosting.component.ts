import { Component, OnInit } from '@angular/core';
import {SolutionSectionService} from '../../../services/solution-section.service';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent implements OnInit {

  currentItem = 'Аттестованный хостинг';
  items: any[];
  constructor(private solutionSectionService: SolutionSectionService) { }

  ngOnInit() {
    this.items = this.solutionSectionService.getItems();
  }

}
