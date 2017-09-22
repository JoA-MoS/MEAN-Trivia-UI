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


  prepareSaveProduct(): Product {
    const formModel = this.productForm.value;
    const saveProduct: Product = {
      _id: null,
      title: formModel.title as string,
      price: formModel.price as number,
      imageUrl: formModel.imageUrl as string,
    };
    console.log(saveProduct);
    return saveProduct;
  }

  onSubmit() {
    this.product = this.prepareSaveProduct();
    // this.service.create(this.product, () => this.router.navigate(['/products']));
    this.service.create$(this.product).subscribe(data => this.router.navigate(['/products']));
  }

}
