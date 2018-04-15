import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor() {

    $(window).scroll(() => {
      if ($(window).scrollTop()) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
      if ($(window).scrollTop() + $(window).height() < $(document).height() - 100) {
        $('#toTop').css('position', 'fixed');
        $('#toTop').css('bottom', '30px');
      }
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('#toTop').css('position', 'fixed');
        $('#toTop').css('bottom', '140px');
      }
    });
  }

  topFunction() {
    $("html, body").animate({scrollTop: 0}, 1000);
  }
}
