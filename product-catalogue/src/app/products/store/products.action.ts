import { Action } from '@ngrx/store';

export enum ProductsActionType {
    GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST',
    GET_PRODUCTS_LIST_SUCCESS = 'GET_PRODUCTS_LIST_SUCCESS'
}

export class GetProductsList implements Action {
    readonly type = ProductsActionType.GET_PRODUCTS_LIST;
    constructor(
        public payload: any
    ) { }
}

export class GetProductsListSuccess implements Action {
    readonly type = ProductsActionType.GET_PRODUCTS_LIST_SUCCESS;
    constructor(
        public payload: any
    ) { }
}

export type ProductsActionAction =
    | GetProductsList
    | GetProductsListSuccess;
