import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProductList().subscribe(
      (data: Product[]) => {
        this.products = data;
        // Aquí puedes manipular this.products, por ejemplo, mostrarlos en el HTML
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }
}
