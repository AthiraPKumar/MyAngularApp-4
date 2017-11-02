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
   this.service.getAll()
    .subscribe(posts => this.posts = posts);      // instead of response we get an array of objects
  }

   createPost(input: HTMLInputElement){
   	let post = {title: input.value};
    this.posts.splice(0, 0, post);    // optimistic approach

   	input.value = '';

   	this.service.create(post)
   	.subscribe(
      newPost => {
     		post['id'] = newPost.id;
     		// this.posts.splice(0, 0, post);   // shift this on top after create post so the post is added soon
     		console.log(newPost);
   	  },
      (error: AppError) => {
        this.posts.splice(0, 1);
        if(error instanceof BadInput){     // if error is 400
          // this.form.setErrors(error.originalError);      // commented out since we donot have a form right now
        }
        else throw error;
      });
   }

   updatePost(post){
    this.service.update(post)
    // this.http.put(this.url, JSON.stringify(post))
    .subscribe(
      updatedPost => {
        console.log(updatedPost);
      });
   }

   deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(345)
    .subscribe(
                          // response you get null when you delete an object - empty parenthesis
        // let index = this.posts.indexOf(post);        // shifting on top(optimistic approach)
        // this.posts.splice(index, 1);
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if(error instanceof NotFoundError)      // if error is 404
          alert("This post has already been deleted");
        else throw error;
      });
   }
}
