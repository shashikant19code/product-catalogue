import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [ProductListingComponent, AddProductComponent, ProductDetailComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ProductsRoutingModule
  ]
})
export class ProductsModule { }
