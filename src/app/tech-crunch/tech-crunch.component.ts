import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tech-crunch',
  templateUrl: './tech-crunch.component.html',
  styleUrls: ['./tech-crunch.component.scss']
})

export class TechCrunchComponent implements OnInit {

  private list: any = [];

  constructor(private httpService: HttpService, private dateService: DateService) { }

  ngOnInit() {
    this.httpService.searchTechCrunch().subscribe((resp: any) => {
      console.log(resp);
      for (let article of resp.articles) {
        article.publishedAt = this.dateService.formataStringData(new Date(article.publishedAt));
        this.list.push(article);
      }
    });
  }



}

