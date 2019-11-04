import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor( private newsService: NewsService, private toastCtrl: ToastController) { }
  public sourceList = [];

  customSources: boolean = false;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.newsService.fetchProviders().subscribe();
  }

  selectCustomSources(){
    console.log(this.customSources)
  }

  putIntoArray(item){

    if (this.sourceList.length <= 19 && this.sourceList.indexOf(item) == -1){
      this.sourceList.push(item)
      console.log(item)
      console.log(this.sourceList.length)
      console.log(this.sourceList)
    }

    else if(this.sourceList.indexOf(item) != -1){
      this.sourceList.splice(this.sourceList.indexOf(item))
      console.log(this.sourceList)
    }
    
    else{
      this.presentToast()
    }
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "You can only select a maximum of 20 sources.",
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

  toStringCommand(){
    console.log(this.sourceList.toString())
  }
}
