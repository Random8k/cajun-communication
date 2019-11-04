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
  customSources: boolean = false;
  
  getInput() {
    this.inputValue
    console.log(this.inputValue);
}

customSearch(){
  this.newsService.fetchCustomNews(this.inputValue).subscribe();
}

customDetailedSearch(){
  // this.newsService.fetchCustomNewsWithSources(this.inputValue).subscribe();
}

 selectSearch(){
   if (this.customSources == false){
    console.log(this.customSources)
    console.log("This statement is false")
    this.customSearch()
   }

 if (this.customSources == true){
    console.log(this.customSources)
    console.log("This statement is true")
    this.customDetailedSearch()
   }

   else{
    console.log("Something broke somewhere")
   }
 }
}
