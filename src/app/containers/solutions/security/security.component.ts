import { Component, OnInit } from '@angular/core';
import {SolutionSectionService} from '../../../services/solution-section.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  currentItem = 'Сетевая безопасность';
  items: any[];
  constructor(private solutionSectionService: SolutionSectionService) { }

  ngOnInit() {
    this.items = this.solutionSectionService.getItems();
  }

}
