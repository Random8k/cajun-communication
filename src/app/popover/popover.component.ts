import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service'
import { TransferService } from '../services/transfer.service'

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController, public navCtrl: NavController, public newsService: NewsService, public transferService:TransferService) { }

  ngOnInit() {
    this.getCustomActivation()
    this.getCustomSites()
  }

  inputValue: string = ""
  sitesToUse: string = ""
  useCustomSource: boolean = null
  
  getInput() {
    this.inputValue
    console.log(this.inputValue);
}

customSearch(){
  this.newsService.fetchCustomNews(this.inputValue).subscribe();
}

customDetailedSearch(){
  this.newsService.fetchCustomNewsWithSources(this.inputValue, this.sitesToUse).subscribe();
}

getCustomSites(){
  return this.transferService.get('sourceList').then((val) => {
    console.log(val);
    this.sitesToUse = val;
  });
}

getCustomActivation(){
  return this.transferService.get('activation').then((val) => {
    console.log(val);
    this.useCustomSource = val;
  });
}

pickSearch(){
  if (this.useCustomSource = true) {
       this.customDetailedSearch()
      } 

  else if (this.useCustomSource = false) {
        this.customDetailedSearch()
       } 
    };

  }

  


 
