import { Component, OnInit } from '@angular/core';
import {NewsSectionService} from '../../services/news-section.service';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  currentItem = 'Пресс-центр';
  items: any[];
  news: any[];
  constructor(private newsSectionService: NewsSectionService, private newsService: NewsService) { }

  ngOnInit() {
    this.items = this.newsSectionService.getItems();
    this.news = this.newsService.getNews();
  }

}
