import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateService } from '../date.service';

@Component({
  selector: 'app-bbc',
  templateUrl: './bbc.component.html',
  styleUrls: ['./bbc.component.scss']
})

export class BbcComponent implements OnInit {

  private list: any = [];

  constructor(private httpClient: HttpClient, private dateService: DateService) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/api/bbc').subscribe((resp: any) => {
      for (let article of resp.articles) {
        article.publishedAt = this.dateService.formataStringData(new Date(article.publishedAt));
        this.list.push(article);
      }
    });
  }

}

