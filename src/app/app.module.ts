import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { RedditComponent } from './reddit/reddit.component';
import { ProductHuntComponent } from './product-hunt/product-hunt.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HackerNewsComponent,
    RedditComponent,
    ProductHuntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
