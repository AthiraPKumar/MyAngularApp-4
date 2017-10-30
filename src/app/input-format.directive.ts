import { Directive , HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
	@Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

  	@HostListener('blur') onBlur(){
  		let value:string = this.el.nativeElement.value;
  		this.el.nativeElement.value = value.toLowerCase();
		console.log("on Blur");

		if(this.format == 'lowercase')
			this.el.nativeElement.value = value.toLowerCase();
		else
			this.el.nativeElement.value = value.toUpperCase();
	}
  
}
