import { Component, Input } from '@angular/core';

@Component({
  selector: 'likebutton',
  templateUrl: './likebutton.component.html',
  styleUrls: ['./likebutton.component.css']
})
export class LikebuttonComponent {

	@Input('like') like:number;
	@Input('isActive') isActive:boolean;

    whenClicked(){
    	// if(this.isActive){
    	// 	this.like--;
    	// }else{
    	// 	this.like++;
    	// }
    	this.like += (this.isActive) ? -1 : +1;
    	this.isActive = !this.isActive;
      console.log(this.isActive,"count");
    }
}
