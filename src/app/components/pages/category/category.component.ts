import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	constructor(private router: Router, private route: ActivatedRoute) { }

	public category: any;

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.category = params.category;
		});
	}
}
