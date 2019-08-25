import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
products:Product[];
ProductFrom: boolean = false;
isNew: boolean = true;
newProduct:any = [];

constructor(private testService: TestService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.products = this.testService.getProducts();
  }

  clearForm(newProduct){
    //resets the form
    this.newProduct = {};
  }

  submitProducts(product:Product){
    //add new product
    // if(this.isNew){
      this.products.push(product);
      console.log(product,'ppppp');
    // }else{
    //     for(let i =0; i< this.products.length; i++){
    //       if(this.products[i].id === product.id){
    //         this.products[i] = product;
    //       }
    //     }
    // }
  }

  displayEditProducts(product:Product){
   this.newProduct = product;
  }

  deleteProduct(product:Product){
    let index = this.products.indexOf(product);
    this.products.splice(index,1);
  }



}
