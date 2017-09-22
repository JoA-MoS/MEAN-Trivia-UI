import { Observable } from 'rxjs/Observable';
import { ProductsService } from './../../services/products/products.service';
import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() product: Product;
  productForm: FormGroup;
  product$: Observable<Product>;

  constructor(private fb: FormBuilder,
    private service: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getById$(params.get('id')))
      .subscribe(product => {
        this.product = product;
        this.productForm.reset({
          title: this.product.title,
          price: this.product.price,
          imageUrl: this.product.imageUrl,
        });
      });

  }

  createForm(): any {
    this.productForm = this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      price: ['', Validators.compose([Validators.required, Validators.pattern(`^(([1-9]*)|(([1-9]*)\.([0-9]*)))$`), Validators.min(0)])],
      imageUrl: [''],
    });
  }


  prepareSaveProduct() {
    const formModel = this.productForm.value;
    console.log(formModel);
    this.product.title = formModel.title as string;
    this.product.price = formModel.price as number;
    this.product.imageUrl = formModel.imageUrl as string;
  }

  onSubmit() {
    this.prepareSaveProduct();
    console.log(this.product);

    this.service.update(this.product._id, this.product);
    this.router.navigate(['/products']);

  }

  onDelete(product: Product) {
    this.service.delete$(product._id).subscribe(data => this.router.navigate(['/products']));
  }


}
