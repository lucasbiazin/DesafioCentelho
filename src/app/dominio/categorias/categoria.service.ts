import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



const API = environment.API_PATH;
const RECURSO = API + '/products/categories'


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

categorias: String[]

  constructor(private http: HttpClient) { }


  obterTodas() {
    return this.http.get<string[]>(`${RECURSO}`).toPromise();

  }
}
