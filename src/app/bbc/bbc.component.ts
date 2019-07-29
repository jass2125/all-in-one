import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-bbc',
  templateUrl: './bbc.component.html',
  styleUrls: ['./bbc.component.scss']
})

export class BbcComponent implements OnInit {

  private list: any = [];

  constructor(private dateService: DateService, 
    private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.searchBbc().subscribe((resp: any) => {
      for (let article of resp.articles) {
        article.publishedAt = this.dateService.formataStringData(new Date(article.publishedAt));
        this.list.push(article);
      }
    });
  }

}

