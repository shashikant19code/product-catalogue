import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from './../../../app.model';
import { ProductService } from './../../service/product.service';
import { GetProductsList } from '../../store/products.action';
import { getProductListInOrder } from './../../store/products.selector';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit, OnDestroy {
  public allProducts: any = [];
  public allProductsSub: Subscription;
  public deleteProductSub: Subscription;
  public isShow = false;

  public getproductsList$: Observable<any> = this.store.select(getProductListInOrder);

  constructor(public router: Router, private productService: ProductService, public store: Store<AppState>) { }

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.isShow = true;
    }
    this.getproductsList$.subscribe(data => {
      if (data) {
        this.allProducts = data;
      } else {
        this.store.dispatch(new GetProductsList({}));
      }
    });
  }

  /**
   * ngOnDestroy: Each subscription should be unsubscribe here otherewise Data leakage might happened.
   */
  ngOnDestroy(): void {
    if (this.allProductsSub) {
      this.allProductsSub.unsubscribe();
    }
    if (this.deleteProductSub) {
      this.deleteProductSub.unsubscribe();
    }
  }

  /**
   * navigateTo: Go to the particular Route.
   */
  public navigateTo(tab): void {
    this.router.navigate([tab]);
  }

  /**
   * gotoProduct: View Details of the selected product.
   */

  public gotoProduct(product): void {
    this.router.navigate(['view-details', product.id]);
  }

  /**
   * editSelectedProduct: Edit the selected product
   */
  public editSelectedProduct(event, product): void {
    event.stopPropagation();
    this.router.navigate(['edit-product', product.id]);
  }

  /**
   * deleteSelectedProduct: TO delete the product.
   */
  public deleteSelectedProduct(event, product): void {
    event.stopPropagation();
    this.deleteProductSub = this.productService.deleteProductById(product.id).subscribe(data => {
      if (data) {
        this.store.dispatch(new GetProductsList({}));
      }
    });
  }

}
