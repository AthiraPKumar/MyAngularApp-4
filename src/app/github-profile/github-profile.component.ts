import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	// this is not an observable - saving id using snapshot method
  	let id = this.route.snapshot.paramMap.get('id');
  	console.log(id);


  	// this is using an observable (optional)

  	// this.route.paramMap
  	// .subscribe(params => {
  	// 	let id = +params.get('id');
  	// 	console.log(params.get('id'));
  	// });
  }

}
