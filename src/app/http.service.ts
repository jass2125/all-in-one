import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private dateService: DateService) { }

  public searchBbc() {
    return this.httpClient.get('http://localhost:3000/api/bbc');
  }

  public searchGithub() {
    return this.httpClient.get('http://localhost:3000/api/github');
  }

  public searchTechCrunch() {
    return this.httpClient.get('http://localhost:3000/api/tech-crunch');
  }

  public searchWallStreet() {
    return this.httpClient.get('http://localhost:3000/api/wall-street-journal');
  }

  public searchHackerNews(): any {
    return this.httpClient.get('https://hacker-news.firebaseio.com/v0/topstories.json/');
  }

  public searchByIdHackerNews(id): any {
    return this.httpClient.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  }

}
