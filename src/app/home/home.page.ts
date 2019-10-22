import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private newsService: NewsService ) {}

  ngOnInit() {
    // this.newsService.fetchNews().subscribe();
  }

  ionViewWillEnter() {
    this.newsService.fetchNews().subscribe();
  }

}

