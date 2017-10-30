import {CoursesService} from './courses.service';
import {Component} from '@angular/core';


@Component({
	selector:'courses',
	template:`
		<h2>{{ title }}</h2>
		<h3>{{ title2 | summary:10 }}</h3>
		<ul>
			<li *ngFor="let course of courses">
				{{course}}
			</li>
		</ul>
		<img [src]="imageUrl"/>
		<table>
			<tr>
				<td [attr.colspan] ="colSpan"></td>
			</tr>
		</table>
		<button class="btn btn-primary" [class.active]="isActive">Save</button>
		<button [style.backgroundColor]="isActive ? 'blue': 'white' ">Reset</button>
		<div (click)="onDivClicked()">
			<button (click)="onSave($event)">Save</button>
		</div>
		<br/>
		<input [value]="email" (keyup.enter)="onKeyUp(email.value)"/><br/><br/>
		<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
	`
})

export class CoursesComponent{
	title="List of courses";
	title2=" is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy";
	colSpan=2;
	isActive=true;
	email="athira@gmail.com";

	onSave($event){
		$event.stopPropagation();
		console.log("Button was clicked",$event);
	}

	onDivClicked(){
		console.log("Div was clicked");
	}

	onKeyUp(){
		// if($event.keyCode===13)
			console.log(this.email);

	}

	// getTitle(){
	// 	return this.title;
	// }

	courses;


	constructor(service:CoursesService){
		// let service = new CoursesService();
		this.courses = service.getCourses();

	}
}