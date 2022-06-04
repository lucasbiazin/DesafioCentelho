import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/dominio/produtos/produto.service';
import { Product } from 'src/app/models/product.model';



@Component({
  selector: 'produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  produtosObtidos: Product[];
  
 

  categories: Product[]

  constructor(private produtoService: ProdutoService,
    private route: Router,
    private http: HttpClient

  ) {

  }


  abrirProduto(id: number) {
    this.route.navigate(['produto-detalhe', id])

  }


  getAllProducts() {
    this.produtoService.obterTodos()
      .then(resposta => {
        console.log(resposta.products)
        this.produtosObtidos = resposta.products;
      }).catch(error => console.log(error));
  }


  ngOnInit() {

    this.getAllProducts()


  }


}


