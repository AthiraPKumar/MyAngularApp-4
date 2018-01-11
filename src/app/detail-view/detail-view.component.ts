import { Component } from '@angular/core';

@Component({
  selector: 'detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
	viewMode:string = 'status';

	consumers = [
		{id:1 , name:"Athira", status:"Active"},
		{id:2 , name:"Maya", status:"Active"},
		{id:3 , name:"Paul", status:"Active"},
	];

	onAdd(){
		this.consumers.push({id:4, name:"Clint", status:"Active" });
	};
	onRemove(people){
		let index = this.consumers.indexOf(people);
		this.consumers.splice(index, 1);
	};
	onChange(people){
		people.status ="Inactive";
	};
}
