import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from './products.model';

export const getProductsList = createFeatureSelector('ProductsReducer');

export const getProductListInOrder = createSelector(getProductsList, (state: ProductsState) => {
    return state.productsList;
});

