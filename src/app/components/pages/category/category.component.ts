import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	constructor(private newsservice: NewsService, private route: ActivatedRoute) { }

	public category: any;

	latest_news: News;

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.category = params.category;

			this.newsservice.getHeadlinesByCatAndCountry(this.category, "IN")
				.subscribe(
					(data: News[]) => this.latest_news = data["articles"],
					(err: any) => console.log(err),
					() => console.log(this.category)
				);
		})


	}
}
