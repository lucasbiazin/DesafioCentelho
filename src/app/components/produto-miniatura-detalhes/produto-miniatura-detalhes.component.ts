import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-produto-miniatura-detalhes',
  templateUrl: './produto-miniatura-detalhes.component.html',
  styleUrls: ['./produto-miniatura-detalhes.component.css']
})
export class ProdutoMiniaturaDetalhesComponent implements OnInit {


@Input() produtoDoComponente: Product

  constructor(private route: Router) { }

  abrirProduto(id: number) {
    this.route.navigate(['produto-detalhe', id])

  }


  abrirCarrinho() {
    this.route.navigate(['carrinho'])

  }

  ngOnInit() {
  }

}
