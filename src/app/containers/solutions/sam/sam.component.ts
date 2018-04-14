import { Component, OnInit } from '@angular/core';
import {SolutionSectionService} from '../../../services/solution-section.service';

@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.scss']
})
export class SamComponent implements OnInit {

  currentItem = 'SAM';
  items: any[];
  constructor(private solutionSectionService: SolutionSectionService) { }

  ngOnInit() {
    this.items = this.solutionSectionService.getItems();
  }

}
