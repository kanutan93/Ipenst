import { Component, OnInit } from '@angular/core';
import {VendorsService} from '../../services/vendors.service';
import {CompanySectionService} from '../../services/company-section.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  currentItem = 'Вендоры';
  items: any[];
  vendors: any[];
  constructor(private vendorsService: VendorsService, private companySectionService: CompanySectionService) { }

  ngOnInit() {
    this.items = this.companySectionService.getItems();
    this.vendors = this.vendorsService.getVendors();
  }

}
