import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateService } from '../date.service';

@Component({
  selector: 'app-wall-street-journal',
  templateUrl: './wall-street-journal.component.html',
  styleUrls: ['./wall-street-journal.component.scss']
})

export class WallStreetJournalComponent implements OnInit {

  private list: any = [];

  constructor(private httpClient: HttpClient, private dateService: DateService) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/api/wall-street-journal').subscribe((resp: any) => {
      console.log(resp);
      for (let article of resp.articles) {
        article.publishedAt = this.dateService.formataStringData(new Date(article.publishedAt));
        this.list.push(article);
      }
    });
  }
}
