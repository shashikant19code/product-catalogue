import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from './../../../app.model';
import { ProductService } from '../../../service/product.service';
import { getProductListInOrder } from '../../store/products.selector';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: any = {};
  public productSub: Subscription;
  public allProducts: any = [];

  public getproductsList$: Observable<any> = this.store.select(getProductListInOrder);

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, public store: Store<AppState>) { }

  ngOnInit(): void {
    let id;
    const paramIdSub = this.activatedRoute.params.subscribe(params => {
      id = params['id'];
    });
    paramIdSub.unsubscribe();
    this.getproductsList$.subscribe(data => {
      if (data) {
        this.allProducts = data;
        const productInfo = this.allProducts.find(product => {
          return product.id == id;
        });
        if (productInfo) {
          this.product = productInfo;
        }
      } else {
        this.productSub = this.productService.getProductById(id).subscribe(product => {
          this.product = product;
        });
      }
    });
  }

}
