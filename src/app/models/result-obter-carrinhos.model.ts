import { Carrinho } from "./carrinho.models"
import { Product } from "./product.model";

export interface ResultObterCarrinhos {

    carts: Carrinho;
    product: Product;
    total: number;
    skip: number;
    limit: number;

}

