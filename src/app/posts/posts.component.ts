import { PostService } from './../services/post.service';
import { Component, OnInit} from '@angular/core';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit{
posts = [];

  constructor(private service: PostService) {
   }

  ngOnInit(){
   this.service.getPosts()
    .subscribe(response => {
      // console.log(response.json());
      this.posts = response.json();
    });
  }

   createPost(input: HTMLInputElement){
   	let post = {title: input.value};
   	input.value = '';
   	this.service.createPost(post)
   	.subscribe(
      response => {
     		post['id'] = response.json().id;
     		this.posts.splice(0, 0, post);
     		console.log(response.json());
   	  },
      (error: AppError) => {
        if(error instanceof BadInput){     // if error is 400
          // this.form.setErrors(error.originalError);      // commented out since we donot have a form right now
        }
        else throw error;
      });
   }

   updatePost(post){
    this.service.updatePost(post)
    // this.http.put(this.url, JSON.stringify(post))
    .subscribe(
      response => {
        console.log(response.json());
      });
   }

   deletePost(post){
    this.service.deletePost(345)
    .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      (error: AppError) => {
        if(error instanceof NotFoundError)      // if error is 404
          alert("This post has already been deleted");
        else throw error;
      });
   }
}
