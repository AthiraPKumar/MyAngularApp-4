import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PostService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }   
}

// in individual component service you only pass the api url.
//  CRUD operations you do in the base class called 'DataServices' in services folder itself. 
