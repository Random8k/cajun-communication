import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  browseService: any;

  constructor( private newsService: NewsService, private iab: InAppBrowser ) {}

  ngOnInit() {
    // this.newsService.fetchNews().subscribe();
  }

  ionViewWillEnter() {
    this.newsService.fetchNews().subscribe();
  }

  
  openNative(x: string){
    console.log('opening...');
    this.iab.create(x, `_system`);
  }

}

