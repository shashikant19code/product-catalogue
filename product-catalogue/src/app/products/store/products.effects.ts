import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { GetProductsList, GetProductsListSuccess, ProductsActionType } from './products.action';
import { ProductService } from './../../service/product.service';


@Injectable()
export class ProductsListEffect {
    constructor(private actions$: Actions, private productService: ProductService) { }

    @Effect()
    public productsList$ = this.actions$.pipe(
        ofType(ProductsActionType.GET_PRODUCTS_LIST),
        switchMap((action: GetProductsList) => this.productService.getAllProducts()),
        map(res => {
            return new GetProductsListSuccess(res);
        })
    );
}
