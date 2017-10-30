import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';
// import { LikeComponent } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;

  title2 = "Hello World";

  post = {
  	title:"Title",
  	isFavourite:true
  }

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs){
  	 console.log("Favourite changed", eventArgs);
  }

  tweet = {
    body:'body of tweet',
    isLiked: true,
    likesCount: 10
  }

  classes = [1,2];

  courses = ["Angular","Node"];

  viewMode = 'map';

  viewModeTabs = 'home';

  studentsList = [
      {id:1, name:'Riya'},
      {id:2, name:'Kavya'},
      {id:3, name:'Pranav'}
  ];

  // loadStudents(){
  //   this.studentsList=[
  //     {id:1, name:'Riya'},
  //     {id:2, name:'Kavya'},
  //     {id:3, name:'Pranav'}
  //   ];
  // }

  // trackStudents(index,student){
  //   return student ? student.id : undefined;
  // }

  onAddStudent(){
    this.studentsList.push({id:4, name:'Breena'});
  }

  removeStudent(student){
    let index=this.studentsList.indexOf(student);
    this.studentsList.splice(index,1);
  }

  task = {
    title:'Review Applications',
    asignee:null
  }

}
