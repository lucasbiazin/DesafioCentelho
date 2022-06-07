import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe.component';
import { FormsModule } from '@angular/forms';
import { ProdutoMiniaturaDetalhesComponent } from './components/produto-miniatura-detalhes/produto-miniatura-detalhes.component';






@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoDetalheComponent,
    ProdutoMiniaturaDetalhesComponent,
    
    
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
