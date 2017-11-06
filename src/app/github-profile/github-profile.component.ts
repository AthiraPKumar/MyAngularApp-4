import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  submit(){
    this.router.navigate(['/followers'],{
      queryParams:{page: 1, order: 'newest'}
    });
  }

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
