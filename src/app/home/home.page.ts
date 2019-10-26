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
}