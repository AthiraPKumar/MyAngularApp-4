import { AlbumService } from './../services/album.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

listAlbum = [];

  constructor(private service:AlbumService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.listAlbum = response;
        console.log(response,"data");
      });
  }

  create(input: HTMLInputElement){
      let post= {
        email:input.value
      };
      input.value = '';
      this.service.create(post)
      .subscribe(response =>{
        post['id'] = response.id;
        this.listAlbum.splice(0, 0, post);
      });
   }

   UpdateList(post){
    this.service.update(post)
    .subscribe(response => {
      console.log(response);
    });
   }

   deleteAlbum(post){
    this.service.delete(post.id)
      .subscribe(response => {
          let index = this.listAlbum.indexOf(post);
          this.listAlbum.splice(index, 1);
      });
   }

  


  }
