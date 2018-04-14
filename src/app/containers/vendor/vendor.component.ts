import { Component, OnInit } from '@angular/core';
import {VendorsService} from '../../services/vendors.service';
import {ActivatedRoute} from '@angular/router';
import {CompanySectionService} from '../../services/company-section.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  currentItem: string;
  items: any[];
  vendor: any;
  constructor(private vendorService: VendorsService,
              private route: ActivatedRoute,
              private companySectionService: CompanySectionService) { }

  ngOnInit() {
    this.items = this.companySectionService.getItems();
    this.route.params.subscribe((params: {id: string}) => {
      this.currentItem = params.id.toUpperCase();
      this.vendor = this.vendorService.findVendor(this.currentItem);
    });
  }

}
