import { Router } from '@angular/router';
import { ProductsService } from './../../services/products/products.service';
import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
  @Input() product: Product;
  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  onDelete(product: Product) {
    this.service.delete(product._id);
  }


}
