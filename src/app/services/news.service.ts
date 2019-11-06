import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  public newsReports = [];
  public providers = [];
 
  constructor( public http: HttpClient ) { }

  apiKey: string = environment.apiKey;
  

  /*
    fetchNews method
    this method returns the top headlines nationally, using the 'top-headlines'
    command.

  */
  fetchNews() {
    console.log('fetching news');
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="+ this.apiKey +""
    return this.http.get(url).pipe(tap(response => {
        console.log(response);
        this.newsReports = response['articles'];
    }));
  }

  fetchNewsByTopic(topic) {
    console.log('fetching news');
    let url = "https://newsapi.org/v2/top-headlines?category="+ topic +"&country=us&apiKey="+ this.apiKey +""
    return this.http.get(url).pipe(tap(response => {
        console.log(response);
        this.newsReports = response['articles'];
    }));
  }


    /*
    fetchCustomNews method
  * this method returns customized headlines nationally, using the 'everything' command.
    @param searchTerm the custom term to be searched.
  */

  fetchCustomNews(searchTerm){
    console.log('fetching customized news!');
    let url = "https://newsapi.org/v2/everything?q="+ searchTerm +"&apiKey="+ this.apiKey +""
    return this.http.get(url).pipe(tap(response => {
        console.log(response);
        this.newsReports = response['articles'];
    }));
      
  }

  fetchCustomNewsWithSources(searchTerm, list){
    console.log('fetching customized news!');
    let url = "https://newsapi.org/v2/everything?q="+ searchTerm +"&apiKey="+ this.apiKey +"&sources="+ list +""
    return this.http.get(url).pipe(tap(response => {
        console.log(response);
        this.newsReports = response['articles'];
    }));
      
  }

  fetchProviders(){
    console.log('fetching providers!');
    let url = "https://newsapi.org/v2/sources?language=en&country=us&apiKey="+ this.apiKey +""
    return this.http.get(url).pipe(tap(response => {
        console.log(response);
        this.providers = response['sources'];
    }));
  }
}