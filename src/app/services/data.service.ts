import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/promise';  
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll(){
  	return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
  }

  create(resourse){         //in http we always rename the params as resourse
    // return Observable.throw(new AppError());       // factory method that throws error...used temporarily
  	return this.http.post(this.url,JSON.stringify(resourse))
    .map(response => response.json())
    .catch(this.handleError);
  }

  update(resourse){
  	return this.http.patch(this.url + '/' + resourse.id, JSON.stringify({ isRead:true }))
    .map(response => response.json())
    .catch(this.handleError);
  }

  delete(id){
    // return Observable.throw(new AppError());       // for temporarily throwing an error
  	return this.http.delete(this.url + '/' + id)
    .map(response => response.json())
    // .retry(3)
    .catch(this.handleError);       // not calling this method but simply passing the reference
  }

  private handleError(error: Response){
    if(error.status === 400)
        return Observable.throw(new BadInput(error.json()));

    if(error.status === 404)
        return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}


// you can convert observable to promise but not recomended.
// promise --- .then() & .catch()