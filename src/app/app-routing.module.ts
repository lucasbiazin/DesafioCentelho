import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';



const routes: Routes = [

  {
    path: '',
    component: ProdutosComponent,
  },

  {
    path: 'produtos',
    component: ProdutosComponent,
  },
  {
    path: 'produto-detalhe/:id',
    component: ProdutoDetalheComponent,
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
