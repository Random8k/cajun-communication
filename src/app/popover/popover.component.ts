import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service'

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController, public navCtrl: NavController, public newsService: NewsService) { }

  ngOnInit() {}

  inputValue: string = "";
  
  getInput() {
    this.inputValue
    console.log(this.inputValue);
}

 customSearch(){
   this.newsService.fetchCustomNews(this.inputValue).subscribe();
 }

}
