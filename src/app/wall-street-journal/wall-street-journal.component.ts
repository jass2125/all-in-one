import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-wall-street-journal',
  templateUrl: './wall-street-journal.component.html',
  styleUrls: ['./wall-street-journal.component.scss']
})

export class WallStreetJournalComponent implements OnInit {

  private list: any = [];

  constructor(private httpService: HttpService, 
    private dateService: DateService) { }

  ngOnInit() {
    this.httpService.searchTechCrunch().subscribe((resp: any) => {
      for (let article of resp.articles) {
        article.publishedAt = this.dateService.formataStringData(new Date(article.publishedAt));
        this.list.push(article);
      }
    });
  }
}
