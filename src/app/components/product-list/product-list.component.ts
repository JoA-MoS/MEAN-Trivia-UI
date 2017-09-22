import { Product } from './../../models/product';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private service: ProductsService,
    private router: Router) { }

  ngOnInit() {
    this.products$ = this.service.data$;
    this.service.loadAll();
  }



}
