import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy2',
  templateUrl: './zippy2.component.html',
  styleUrls: ['./zippy2.component.css']
})
export class Zippy2Component {

	@Input('title') title: string;
	isExpanded:boolean;

	toggle(){
		this.isExpanded = !this.isExpanded;
	}
}
