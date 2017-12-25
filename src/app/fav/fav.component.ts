import { Component,Input } from '@angular/core';

@Component({
  selector: 'fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
	@Input('isFav') isFav: boolean;


  onClick(){
  	this.isFav = !this.isFav;
  	console.log("clicked: ",this.isFav);
  }

  lists = [1,2];

}
