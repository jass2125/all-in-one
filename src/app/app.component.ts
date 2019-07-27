import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  // @Input()
  // private tabSelected: string;
  @Output()
  public tab = new EventEmitter<string>();
  public tabSelected = 'hacker-news';

  title = 'all-in-one';

  public change(value){
    this.tabSelected = value
    console.log(value);
    
  }
}
