import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateService } from '../date.service';

@Component({
  selector: 'app-tech-crunch',
  templateUrl: './tech-crunch.component.html',
  styleUrls: ['./tech-crunch.component.scss']
})

export class TechCrunchComponent implements OnInit {

  private list: any = [];

  constructor(private httpClient: HttpClient, private dateService: DateService) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/api/tech-crunch').subscribe((resp: any) => {
      console.log(resp);
      for (let article of resp.articles) {
        article.publishedAt = this.dateService.formataStringData(new Date(article.publishedAt));
        this.list.push(article);
      }
    });
  }



}

