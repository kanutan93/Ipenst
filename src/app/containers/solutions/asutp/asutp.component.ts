import { Component, OnInit } from '@angular/core';
import {SolutionSectionService} from '../../../services/solution-section.service';

@Component({
  selector: 'app-asutp',
  templateUrl: './asutp.component.html',
  styleUrls: ['./asutp.component.scss']
})
export class AsutpComponent implements OnInit {

  currentItem = 'Защита АСУТП';
  items: any[];
  constructor(private solutionSectionService: SolutionSectionService) { }

  ngOnInit() {
    this.items = this.solutionSectionService.getItems();
  }

}
