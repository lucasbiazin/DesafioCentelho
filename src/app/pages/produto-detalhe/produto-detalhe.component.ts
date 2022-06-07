import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/dominio/produtos/produto.service';
import { Product } from 'src/app/models/product.model';



@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {


  id: number;

  produto: Product;

  constructor(private route: ActivatedRoute,

    private produtoService: ProdutoService,
    private rout: Router,
  ) {

  }
  VoltarProduto() {
    this.rout.navigate(['produtos'])


  }
  ngOnInit() {


    this.id = this.route.snapshot.params['id']

    this.produtoService.obterPorId(this.id)
      .then(produtoRecebido => {
        this.produto = produtoRecebido;


      })

      .catch(error => console.log(error));

  }




}
