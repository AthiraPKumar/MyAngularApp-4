import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  inputs: ['isFavourite'],
  // encapsulation: ViewEncapsulation.Emulated       // emulates the shadow DOM, property not necessary
})

export class FavouriteComponent {
	@Input() isFavourite:boolean;
	@Output('change') click = new EventEmitter();
	
  onClick(){
  	this.isFavourite = !this.isFavourite;
  	this.click.emit({ newValue:this.isFavourite });
  }
}

export interface FavouriteChangedEventArgs{
	newValue:boolean
}
