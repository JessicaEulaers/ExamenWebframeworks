import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {



   constructor() {
      
   }
      

      // Get all products
      getAllProducts() {
         var product1 = new Product("Mikado","lu","lekkere snack", 2.10)
         var product2 = new Product("magnum nootjes", "magnum", "lekker ijsje", 4.2)
         var arr = {}
         arr[1]= product2
         arr[0] = product1
         return arr;
      }
      

}
