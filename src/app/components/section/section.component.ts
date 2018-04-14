import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() currentItem: string;
  @Input() items: any[];
  constructor() { }

  ngOnInit() {
  }

}
