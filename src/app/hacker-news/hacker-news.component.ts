import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateService } from '../date.service';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.scss']
})

export class HackerNewsComponent implements OnInit {

  public news: any = [];

  constructor(private httpClient: HttpClient, private dateService: DateService) { }

  ngOnInit() {
    this.httpClient.get('https://hacker-news.firebaseio.com/v0/topstories.json/').subscribe((response: any) => {
      for (let n of response)
        this.httpClient.get(`https://hacker-news.firebaseio.com/v0/item/${n}.json?print=pretty`).subscribe((resp: any) => {
          resp.time = this.dateService.formataStringData(new Date(resp.time * 1000));
          this.news.push(resp);
        });
    });
  }

  
}


