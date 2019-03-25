import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from 'src/app/models/news';
import { interval } from 'rxjs';

@Component({
	selector: 'app-news-area-home',
	templateUrl: './news-area-home.component.html',
	styleUrls: ['./news-area-home.component.css']
})
export class NewsAreaHomeComponent implements OnInit {
	latest_business: News;
	latest_science: News;
	latest_sports: News;
	category: any;

	constructor(private newsservice: NewsService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.category = params.category;
		});

		this.newsservice.getHeadlinesByCatAndCountry("business", "IN")
			.subscribe(
				(data: News[]) => this.latest_business = data["articles"][0],
				(err: any) => console.log(err),
				() => console.log('Business')
			);

		this.newsservice.getHeadlinesByCatAndCountry("science", "IN")
			.subscribe(
				(data: News[]) => this.latest_science = data["articles"][0],
				(err: any) => console.log(err),
				() => console.log('Science')
			);

		this.newsservice.getHeadlinesByCatAndCountry("sports", "IN")
			.subscribe(
				(data: News[]) => this.latest_sports = data["articles"][0],
				(err: any) => console.log(err),
				() => console.log('Sports')
			);

		interval(1000 * 60).subscribe(x => {
			this.newsservice.getHeadlinesByCatAndCountry("business", "IN")
				.subscribe(
					(data: News[]) => this.latest_business = data["articles"][0],
					(err: any) => console.log(err),
					() => console.log('Business')
				);

			this.newsservice.getHeadlinesByCatAndCountry("science", "IN")
				.subscribe(
					(data: News[]) => this.latest_science = data["articles"][0],
					(err: any) => console.log(err),
					() => console.log('Science')
				);

			this.newsservice.getHeadlinesByCatAndCountry("sports", "IN")
				.subscribe(
					(data: News[]) => this.latest_sports = data["articles"][0],
					(err: any) => console.log(err),
					() => console.log('Sports')
				);
		});


	}
}
