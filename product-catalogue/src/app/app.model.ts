import { ProductsState } from './products/store/products.model';
import { CoreState } from './core/store/core.model';

export class AppState {
    ProductsState: ProductsState;
    CoreState: CoreState;
}
