import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  @Output()
  public tab = new EventEmitter<string>();

  title = 'all-in-one';

  public change(value){
    console.log(value);
    
  }
}
