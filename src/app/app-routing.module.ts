import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { CategoryComponent } from './components/pages/category/category.component';

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: ":category", component: CategoryComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
