import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class StudentsService {
  constructor() {}
  id: number;
  name: string;

  students = [
    {
      id: 1,
      name: "Athira"
    },
    {
      id: 2,
      name: "Riya"
    },
    {
      id: 1,
      name: "Kavya"
    }
  ];

  public getStudents(){
    const studentObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });
    return studentObservable;
  }
}
