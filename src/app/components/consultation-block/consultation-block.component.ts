import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consultation-block',
  templateUrl: './consultation-block.component.html',
  styleUrls: ['./consultation-block.component.scss']
})
export class ConsultationBlockComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onForm() {
    this.router.navigate(['/form']);
  }

}
