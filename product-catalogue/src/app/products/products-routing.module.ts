import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { InteriorPageComponent } from './../core/components/interior-page/interior-page.component';

const routes: Routes = [
  {
    path: '',
    component: InteriorPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: ProductListingComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'view-details/:id',
        component: ProductDetailComponent
      },
      {
        path: 'edit-product/:id',
        component: AddProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
