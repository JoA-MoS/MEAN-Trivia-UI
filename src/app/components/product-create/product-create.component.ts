import { ProductsService } from './../../services/products/products.service';
import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Input() product: Product;
  productForm: FormGroup;

  constructor(private fb: FormBuilder,
    private service: ProductsService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): any {
    this.productForm = this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      price: ['', Validators.compose([Validators.required, Validators.pattern(`^(([1-9]*)|(([1-9]*)\.([0-9]*)))$`), Validators.min(0)])],
      imageUrl: [''],
    });
  }

}
