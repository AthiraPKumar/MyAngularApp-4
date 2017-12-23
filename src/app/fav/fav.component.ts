import { Component } from '@angular/core';

@Component({
  selector: 'fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
	isFav: boolean;

  constructor() { }

  onClick(){
  	this.isFav = !this.isFav;
  	console.log("clicked: ",this.isFav);
  }


}
