import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  
  private list: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.searchGithub().subscribe((resp) => {
      console.log(resp);
    this.list = resp;
    });
  }

}
