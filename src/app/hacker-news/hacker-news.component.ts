import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.scss']
})
export class HackerNewsComponent implements OnInit {

  public news: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {


    this.httpClient.get('https://hacker-news.firebaseio.com/v0/topstories.json/').subscribe((response: any) => {
      for (let n of response)
        this.httpClient.get(`https://hacker-news.firebaseio.com/v0/item/${n}.json?print=pretty`).subscribe((resp: any) => {
          console.log(response);
          this.news.push(resp);
        });
    });

  }

}
