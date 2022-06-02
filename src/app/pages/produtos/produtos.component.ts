import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/dominio/produto/produtos-service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(

    public produtoService: ProdutoService

  ) { }

  ngOnInit(): void {
  }

}
