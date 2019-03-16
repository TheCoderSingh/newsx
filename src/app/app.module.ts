import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { CategoriesComponent } from './components/commons/categories/categories.component';
import { BreakingNewsComponent } from './components/commons/breaking-news/breaking-news.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsAreaHomeComponent } from './components/news-area-home/news-area-home.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { SmallNewsComponent } from './components/commons/small-news/small-news.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CategoriesComponent,
		BreakingNewsComponent,
		HomeComponent,
		NewsAreaHomeComponent,
		FooterComponent,
		CategoryComponent,
		SmallNewsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
