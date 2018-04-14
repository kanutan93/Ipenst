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
    window.scrollTo(0, 0);
    this.items = this.solutionSectionService.getItems();
  }

}
