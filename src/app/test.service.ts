import { Injectable } from '@angular/core';
import { Product } from './test/product';

@Injectable()
export class TestService {

  constructor() { }

  getProducts():Product[]{
    return[{
      id:1,
      name:'Soap',
      description:'Antiseptic',
      price:20
    },{
      id:2,
      name:'Scissor',
      description:'For cutting',
      price:15
      }]
  }

}
