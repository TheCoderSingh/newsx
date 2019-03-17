import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../models/news'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NewsService {

	BASEURL = "https://newsapi.org/v2/";
	TYPE = "top-headlines?";
	API_KEY = "&apiKey=bdef3ef2d2aa4d2590035954dab74b69";

	constructor(private http: HttpClient) { }

	getHeadlinesByCategory(category: string): Observable<News[]> {
		return this.http.get<News[]>(this.BASEURL + this.TYPE + "category=" + category + this.API_KEY);
	}

	getHeadlinesByCountry(country: string): Observable<News[]> {
		return this.http.get<News[]>(this.BASEURL + this.TYPE + "country=" + country + this.API_KEY);
	}

	getHeadlinesByCatAndCountry(category: string, country: string): Observable<News[]> {
		return this.http.get<News[]>(this.BASEURL + this.TYPE + "category=" + category + "&country=" + country + this.API_KEY);
	}
}
