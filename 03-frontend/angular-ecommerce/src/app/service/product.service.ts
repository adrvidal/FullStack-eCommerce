import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  //getProducts(): Observable<Product[]> {
  //  return this.http.get<Product[]>(this.baseUrl);
  //}
  
   getProductList(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products) 
    );
  }  
}

interface GetResponse{
    _embedded:{
      products: Product[];
    }
  }