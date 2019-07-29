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
  private date: Date;

  ngOnInit() {
    // this.httpClient.get('http://localhost:3000/api/hacker-news').subscribe((response: any) => {
    //   this.news = response;
    //   debugger;
    // });
    
    this.httpClient.get('https://hacker-news.firebaseio.com/v0/topstories.json/').subscribe((response: any) => {
      for (let n of response)
        this.httpClient.get(`https://hacker-news.firebaseio.com/v0/item/${n}.json?print=pretty`).subscribe((resp: any) => {
          resp.time = this.formataStringData(new Date(resp.time * 1000));
          this.news.push(resp);
        });
    });
  }

  formataStringData(data) {

    // let d = data.getUTCDay() + '-' + data.getUTCMonth() + '-' + data.getUTCFullYear();
    // console.log(data.getUTCDay());
    // console.log(data.getUTCMonth());
    // console.log(data.getUTCFullYear());
    var mm = data.getMonth() + 1; // getMonth() is zero-based
    var dd = data.getDate();

    return [(dd > 9 ? '' : '0') + dd + "/" +
      (mm > 9 ? '' : '0') + mm,
    data.getFullYear()
    ]
      .join('/');
  };
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}


