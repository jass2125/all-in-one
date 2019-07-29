import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output()
  public changeValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeTab($event) {
    this.changeValue.emit($event);
  }

}
