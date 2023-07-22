// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  public products: Product[] = [];
  // constructor(private httpClient: HttpClient) { }
  // ngOnInit(): void {
  //   this.httpClient.get(this.url).subscribe(
  //     (response) => {
  //       this.products = response as Product[];
  //     },
  //     (error) => console.error('Error', error)
  //   );
  // }
  constructor(private productservice: ProductService) { }
  ngOnInit(): void {
    this.productservice.getProducts().subscribe(
      (response) => {
        this.products = response ;
      },
      (error) => console.error('Error', error)
    )
  }
}
