// example of using reactive forms - form-builders 
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
	form;
	// form = new FormGroup({
	// 	name: new FormControl('', Validators.required),
	// 	contact: new FormGroup({
	// 	email:new FormControl(),
	// 	phone: new FormControl()
	// 	}),
	// 	topics: new FormArray([])

	// });

	addTopic(topic : HTMLInputElement){
		this.topics.push(new FormControl(topic.value));
		topic.value = '';

	}

	removeTopic(topic:FormControl){
		let index=this.topics.controls.indexOf(topic);
		this.topics.removeAt(index);
	}

	get topics(){
		return this.form.get('topics') as FormArray;
	}

	goHome(){
		this.router.navigate(['']);
	}


	constructor(fb: FormBuilder,private router: Router){
		this.form = fb.group({
			name:['', Validators.required],
			contact: fb.group({
				email: [],
				phone: []
			}),
			topics: fb.array([])
		})

	}

}
