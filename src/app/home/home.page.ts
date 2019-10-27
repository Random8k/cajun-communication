import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  browseService: any;

  constructor( private newsService: NewsService, private iab: InAppBrowser, private popoverController: PopoverController) {}

  private topics = ["business", "entertainment","health", "general", "politics", "sports", "technology"];
  searchValue: number = 0;

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

  async presentPopover(event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      showBackdrop: false,
      event
    });
    return await popover.present();
  }

  setValue(x) {
    this.searchValue = x;
    console.log(this.searchValue);
    console.log(this.topics[this.searchValue]);
}



 getNewsWithButton(){
   this.newsService.fetchNewsDetailed(this.topics[this.searchValue]).subscribe();
}
}