import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateService } from '../date.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.scss']
})

export class HackerNewsComponent implements OnInit {

  public news: any = [];

  constructor(private httpService: HttpService, private dateService: DateService) { }

  ngOnInit() {
    this.httpService.searchHackerNews().subscribe((response: any) => {
      for (let id of response)
        this.httpService.searchByIdHackerNews(id).subscribe((resp: any) => {
          resp.time = this.dateService.formataStringData(new Date(resp.time * 1000));
          this.news.push(resp);
        });
    });
  }


}


