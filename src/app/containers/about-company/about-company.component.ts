import { Component, OnInit } from '@angular/core';
import {CompanySectionService} from '../../services/company-section.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent implements OnInit {

  currentItem = 'О компании';
  items: any[];
  constructor(private companySectionService: CompanySectionService) { }

  ngOnInit() {
    this.items = this.companySectionService.getItems();
  }

}
