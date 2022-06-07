import { Product } from "src/app/models/product.model";

export class OrdenaLista {


    ordenarPorPrecoMenorAoMaior(listaProdutos: Product[]): Product[] {
        listaProdutos.sort((a, b) => {

            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
        })

        return listaProdutos;

    }

    ordenarPorPrecoMaiorAoMenor(listaProdutos: Product[]): Product[] {
        listaProdutos.sort((a, b) => {

            if (b.price > a.price) return 1;
            if (b.price < a.price) return -1;
            return 0;
        })

        return listaProdutos;
    }


}