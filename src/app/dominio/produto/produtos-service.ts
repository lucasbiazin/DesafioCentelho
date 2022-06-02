import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from './produto.model';


const API = environment.ApiUrl;
const RECURSO = API+'/.produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
 
  constructor(
    public http: HttpClient
  ) { }

  selectByIdPublic(idProduto: string){
    let params = { id: idProduto};
    return this.http.post<Produto>(RECURSO+'/selectByIdPublic', params);
  }


}
