import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { CategoriesComponent } from './components/commons/categories/categories.component';
import { BreakingNewsComponent } from './components/breaking-news/breaking-news.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsAreaHomeComponent } from './components/news-area-home/news-area-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    BreakingNewsComponent,
    HomeComponent,
    NewsAreaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
