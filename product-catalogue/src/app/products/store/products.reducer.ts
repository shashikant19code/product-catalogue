import { ProductsActionType, ProductsActionAction } from './products.action';
import { ProductsState } from './products.model';

export function ProductsReducer(state: ProductsState = new ProductsState(), action: ProductsActionAction):
ProductsState {
    switch (action.type) {
        case ProductsActionType.GET_PRODUCTS_LIST_SUCCESS:
            return {
                ...state,
                productsList: action.payload
            };
        default:
            return state;
    }
}

