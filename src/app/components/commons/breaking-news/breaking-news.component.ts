import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news';
import { interval } from 'rxjs';

@Component({
	selector: 'app-breaking-news',
	templateUrl: './breaking-news.component.html',
	styleUrls: ['./breaking-news.component.css']
})
export class BreakingNewsComponent implements OnInit {
	latest_business: News;
	latest_science: News;
	latest_sports: News;

	catid = 1;

	constructor(private newsservice: NewsService) { }

	ngOnInit() {
		this.newsservice.getHeadlinesByCatAndCountry("business", "CA")
			.subscribe(
				(data: News[]) => this.latest_business = data["articles"][0],
				(err: any) => console.log(err),
				() => console.log('All done getting news.')
			);

		this.newsservice.getHeadlinesByCatAndCountry("science", "CA")
			.subscribe(
				(data: News[]) => this.latest_science = data["articles"][0],
				(err: any) => console.log(err),
				() => console.log('All done getting news.')
			);

		this.newsservice.getHeadlinesByCatAndCountry("sports", "CA")
			.subscribe(
				(data: News[]) => this.latest_sports = data["articles"][0],
				(err: any) => console.log(err),
				() => console.log('All done getting news.')
			);

		setInterval(() => this.changeCatId(), 2500);

		interval(1000 * 60).subscribe(x => {
			this.newsservice.getHeadlinesByCatAndCountry("business", "CA")
				.subscribe(
					(data: News[]) => this.latest_business = data["articles"][0],
					(err: any) => console.log(err),
					() => console.log('All done getting news.')
				);

			this.newsservice.getHeadlinesByCatAndCountry("science", "CA")
				.subscribe(
					(data: News[]) => this.latest_science = data["articles"][0],
					(err: any) => console.log(err),
					() => console.log('All done getting news.')
				);

			this.newsservice.getHeadlinesByCatAndCountry("sports", "CA")
				.subscribe(
					(data: News[]) => this.latest_sports = data["articles"][0],
					(err: any) => console.log(err),
					() => console.log('All done getting news.')
				);
		});
	}

	changeCatId() {
		if (this.catid == 3)
			this.catid = 1;
		else
			this.catid++;
	}
}
