import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductService } from './../../../service/product.service';
import { AppState } from './../../../app.model';
import { getProductListInOrder } from '../../store/products.selector';
import { GetProductsList } from '../../store/products.action';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productForm: FormGroup;
  public productSub: Subscription;
  public isEditProduct = false;
  public productInfo: any;
  public allProducts: any = [];

  public getproductsList$: Observable<any> = this.store.select(getProductListInOrder);

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router, public store: Store<AppState>) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productDesc: new FormControl('', Validators.required),
      productType: new FormControl('', Validators.required),
      productCode: new FormControl(Validators.required),
      productPrice: new FormControl(0, Validators.required),
    });
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.isEditProduct = true;
        this.getproductsList$.subscribe(data => {
          if (data) {
            this.allProducts = data;
            const productInfo = this.allProducts.find(product => {
              return product.id == params.id;
            });
            if (productInfo) {
              this.productInfo = productInfo;
              this.productForm.patchValue(productInfo);
            }
          } else {
            this.getProductInfo(params.id);
          }
        });
      }
    });
  }

  /**
   * getProductInfo: Get product information to be edited.
   */
  public getProductInfo(id): void {
    let productInfo;
    this.productSub = this.productService.getProductById(id).subscribe(product => {
      productInfo = Object.assign({}, product);
      this.productInfo = productInfo;
      if (productInfo) {
        this.productForm.patchValue(productInfo);
      }
    });
  }

  /**
   * addProduct:Add product to the productList in the collection or To update existing product.
   */
  public addProduct(): void {
    const requestBody = Object.assign({}, this.productForm.value);
    if (!this.isEditProduct) {
      this.productService.addProductToList(requestBody).subscribe(data => {
        if (data) {
          this.store.dispatch(new GetProductsList({}));
          this.router.navigate(['']);
          console.log('Product added Successfully');
        }
      });
    } else {
      this.productService.updateProductToList(requestBody, this.productInfo.id).subscribe(data => {
        if (data) {
          this.store.dispatch(new GetProductsList({}));
          this.router.navigate(['']);
          console.log('Product updated Successfully');
        }
      });
    }
  }

}
