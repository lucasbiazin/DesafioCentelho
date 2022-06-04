import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ResultObterCategorias } from 'src/app/models/result-obter-categorias.model';
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

  obterPorCategoria(categories: string) {
    return this.http.get<ResultObterCategorias>(`${RECURSO}/${categories}`).toPromise();
  

  }

  obterPorId(id: number) {
    return this.http.get<Product>(`${RECURSO}/${id}`).toPromise();

  }

  filterCategoria(price: number): Observable<Product>{
    return this.http.get<Product>(RECURSO+'/'+price);
  }



}
