import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/dominio/categorias/categoria.service';
import { OrdenaLista } from 'src/app/dominio/produtos/ordena-lista';
import { ProdutoService } from 'src/app/dominio/produtos/produto.service';
import { Product } from 'src/app/models/product.model';



@Component({
  selector: 'produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  categoriasObtidas: String[];
  produtosObtidos: Product[];
  categoria: string;



  constructor(private produtoService: ProdutoService,
             private categoriasService: CategoriaService,
             private route: Router
   ) {

  }


  ordenarPorPrecoMenorAoMaiorClick(listaProdutos: Product[]) {
    listaProdutos = new OrdenaLista().ordenarPorPrecoMenorAoMaior(listaProdutos)


  }

  ordenarPorPrecoMaiorAoMenorClick(listaProdutos: Product[]) {
    listaProdutos = new OrdenaLista().ordenarPorPrecoMaiorAoMenor(listaProdutos)

  }


  abrirCarrinho() {
    this.route.navigate(['carrinho'])
  }

  getAllCategorias() {
    this.categoriasService.obterTodas()
      .then(categorias => {
        this.categoriasObtidas = categorias;
        console.log(categorias)
      }).catch(error => console.log(error));

  }

  getForCategory(categoria: string) {
    this.produtoService.obterPorCategoria(categoria)
      .then(result => {
        this.produtosObtidos = result.products;
      }).catch(error => console.log(error));

  }


  getAllProducts() {
    this.produtoService.obterTodos()
      .then(resposta => {
        this.produtosObtidos = resposta.products;
      }).catch(error => console.log(error));
  }



  ngOnInit() {


    this.getAllProducts()
    this.getAllCategorias()


  }


}


