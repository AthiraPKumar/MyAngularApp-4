import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
	contactMethods = [
		{id: 1, name: "Email"},
		{id: 2, name: "Phone"}
	];

	genderStatus = [
		{id: "1", name: "Male"},
		{id: "2", name: "Female"}
	];

	submit(fcontact){
		console.log(fcontact.value);
	}
}
