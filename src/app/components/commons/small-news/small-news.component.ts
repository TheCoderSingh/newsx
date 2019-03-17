import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news';

@Component({
	selector: 'app-small-news',
	templateUrl: './small-news.component.html',
	styleUrls: ['./small-news.component.css']
})
export class SmallNewsComponent implements OnInit {
	latest_entertainment: News;
	latest_health: News;
	latest_technology: News;
	latest_sports: News;
	latest_science: News;
	latest_business: News;

	second_business: News;
	second_science: News;
	second_sports: News;

	constructor(private newsservice: NewsService) { }

	ngOnInit() {
		this.newsservice.getHeadlinesByCatAndCountry("business", "IN")
			.subscribe(
				(data: News[]) => {
					this.latest_business = data["articles"][0];
					this.second_business = data["articles"][1];
				},
				(err: any) => console.log(err),
				() => console.log('All done getting news.')
			);

		this.newsservice.getHeadlinesByCatAndCountry("science", "IN")
			.subscribe(
				(data: News[]) => {
					this.latest_science = data["articles"][0];
					this.second_science = data["articles"][1];
				},
				(err: any) => console.log(err),
				() => console.log('All done getting news.')
			);

		this.newsservice.getHeadlinesByCatAndCountry("sports", "IN")
			.subscribe(
				(data: News[]) => {
					this.latest_sports = data["articles"][0];
					this.second_sports = data["articles"][1];
				},
				(err: any) => console.log(err),
				() => console.log('All done getting news.')
			);

		this.newsservice.getHeadlinesByCatAndCountry("entertainment", "IN")
			.subscribe(
				(data: News[]) => this.latest_entertainment = data["articles"][0],
				(err: any) => console.log(err),
				() => console.log('All done getting news.')
			);

		this.newsservice.getHeadlinesByCatAndCountry("health", "IN")
			.subscribe(
				(data: News[]) => this.latest_health = data["articles"][0],
				(err: any) => console.log(err),
				() => console.log('All done getting news.')
			);

		this.newsservice.getHeadlinesByCatAndCountry("technology", "IN")
			.subscribe(
				(data: News[]) => this.latest_technology = data["articles"][0],
				(err: any) => console.log(err),
				() => console.log('All done getting news.')
			);
	}
}
