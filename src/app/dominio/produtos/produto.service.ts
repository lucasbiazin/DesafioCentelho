import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ResultObterTodos } from 'src/app/models/result-obter-todos.model';
import { environment } from 'src/environments/environment';



const API = environment.API_PATH;
const RECURSO = API + '/products'


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {



  constructor(private http: HttpClient) { }


  obterTodos() {
    return this.http.get<ResultObterTodos>(`${RECURSO}`).toPromise();

  }

  updateCarrinho(listaDeProdutos: any[]) {
    return this.http.put<any>(`${RECURSO}`, listaDeProdutos).toPromise();

  }


  obterPorId(id: number) {
    return this.http.get<Product>(`${RECURSO}/${id}`).toPromise();

  }

  obterPorCategoria(categoria: string) {
    return this.http.get<ResultObterTodos>(`${RECURSO}/category/${categoria}`).toPromise();


  }



}
