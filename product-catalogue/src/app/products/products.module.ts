import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { InteriorPageComponent } from '../core/components/interior-page/interior-page.component';
import { HeaderComponent } from '../core/header/header.component';
import { StoreModule } from '@ngrx/store';
import { ProductsListEffect } from './store/products.effects';
import { EffectsModule } from '@ngrx/effects';
import { ProductsReducer } from './store/products.reducer';

@NgModule({
  declarations: [ProductListingComponent, AddProductComponent, ProductDetailComponent, InteriorPageComponent, HeaderComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ProductsRoutingModule,
    StoreModule.forFeature('ProductsReducer', ProductsReducer),
    EffectsModule.forFeature([ProductsListEffect]),
  ]
})
export class ProductsModule { }
