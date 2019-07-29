import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bbc',
  templateUrl: './bbc.component.html',
  styleUrls: ['./bbc.component.scss']
})

export class BbcComponent implements OnInit {

  private list: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/api/bbc').subscribe((resp: any) => {
      console.log(resp);
      for (let article of resp.articles) {
        debugger;
        article.publishedAt = this.formataStringData(new Date(article.publishedAt));
        this.list.push(article);
      }
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
}

