import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';  	// for combining more than 2 observables
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
followers: any[];

  constructor(
  	private route: ActivatedRoute,
  	private service: GithubFollowersService) { }

  ngOnInit() {
  	let newObservable = Observable.combineLatest([
  		this.route.paramMap,
  		this.route.queryParamMap
	])

	newObservable.subscribe(combinedObservable => {
		let id = combinedObservable[0].get('id');
		let page = combinedObservable[1].get('page');

		// this.service.getAll({ id: id, page: page })
		this.service.getAll()
  			.subscribe(allfollowers => {
              this.followers = allfollowers;
              console.log(this.followers,"followers");
        });
	});
			
  }

}

// here the method used is subscribing to multiple observables for getting the query params

	// this.route.paramMap.subscribe();							// to get query param or we can use snapshot if user donot want to navigate back
  	// let id = this.route.snapshot.paramMap.get('id');			// saving id using snapshot method - for getting parameters

  	// this.route.queryParamMap.subscribe();					// for getting query params use queryparamMap
  	// let pageNum = this.route.snapshot.queryParamMap.get('pageNum');