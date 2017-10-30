import { Component, Input} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {

	@Input('likesCount') likesCount:number;
	@Input('isActive') isActive:boolean;

	  OnClick(){
	  	// if(this.isActive){
	  	// 	this.likesCount--;
	  	// }else{
	  	// 	this.likesCount++;
	  	// }
	  	this.likesCount += (this.isActive) ? -1 : 1;
	  	this.isActive = !this.isActive;
	  }
}
