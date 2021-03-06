import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { GithubComponent } from './github/github.component';
import { WallStreetJournalComponent } from './wall-street-journal/wall-street-journal.component';
import { BbcComponent } from './bbc/bbc.component';
import { TechCrunchComponent } from './tech-crunch/tech-crunch.component';
import { DateService } from './date.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HackerNewsComponent,
    GithubComponent,
    WallStreetJournalComponent,
    BbcComponent,
    TechCrunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ DateService, HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
