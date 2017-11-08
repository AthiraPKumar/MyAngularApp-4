import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
user:Object = {};
registerForm: FormGroup;



  constructor(fb: FormBuilder) {
  	this.registerForm = fb.group({
  		username: ['', Validators.required],
  		email: ['', Validators.required],
  		address: ['', Validators.required]
  	});
   }

  get username(){
	return this.registerForm.get('username');
  }

  get email(){
   	return this.registerForm.get('email');
  }

  get address(){
   	return this.registerForm.get('address');
  }

  registerDetails(form: NgForm){
  	console.log(form.value);
  }

}
