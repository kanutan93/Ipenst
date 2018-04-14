import { Component, OnInit } from '@angular/core';
import {NewsSectionService} from '../../services/news-section.service';
import {NewsService} from '../../services/news.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news-description',
  templateUrl: './news-description.component.html',
  styleUrls: ['./news-description.component.scss']
})
export class NewsDescriptionComponent implements OnInit {

  items: any[];
  currentItem: string;
  article: any;
  constructor(private newsSectionService: NewsSectionService,
              private newsService: NewsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.items = this.newsSectionService.getItems();
    this.route.params.subscribe((params: {id: string}) => {
      this.article = this.newsService.findNews(params.id.toUpperCase());
      this.currentItem = this.article.title;
    });
  }

}
