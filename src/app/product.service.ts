import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Product } from './Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url = ' http://localhost:3000/products';
  constructor(private http:HttpClient) { }
  getProducts():Observable <Product[]>
  {
    return this.http.get<Product[]>(this.url).pipe()
  }

  addProduct(product:Product)
  {
    return this.http.post(this.url,product,)
  }

  updateProduct(id :number, body:Product)
  {
    return this.http.put(this.url +id, body)
  } 
  findProduct(id:number)
  {
    return this.http.get(this.url+ '/'+id)
  }
}
