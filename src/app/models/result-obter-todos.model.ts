import { Product } from "./product.model";

export interface ResultObterTodos {

    products: Product[]
    total: number
    skip: number
    limit: number

}   