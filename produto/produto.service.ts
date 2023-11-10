import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Product } from "./product.model";
import { environment } from "src/environments/environment";
import { MessageService } from "primeng/api";

export class ProdutoFiltro {
  nome?: string;
  pagina: number = 0;
  itensPorPagina: number = 5;
}



@Injectable({
  providedIn: "root",
})
export class ProdutoService {
 // baseUrl = "http://localhost:8000/produtos";
 produtosUrl: string | undefined
  constructor( private http: HttpClient,    private messageService: MessageService) {
    this.produtosUrl = `${environment.apiUrl}/produtos`;

  }


 



  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.produtosUrl}`).pipe(
      map((obj) => obj),
      //catchError((e) => this.errorHandler(e))
    );
  }



 /*showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }*/ 

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    return this.http.put<void>(`${this.produtosUrl}/${codigo}/ativo`, ativo)
      .toPromise();
  }

  pesquisar(filtro: ProdutoFiltro): Promise<any> {
    let params = new HttpParams()
      .set('page', filtro.pagina)
      .set('size', filtro.itensPorPagina);

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.produtosUrl}`, { params })
      .toPromise()
      .then((response: any) => {
        const pessoas = response['content'];

        const resultado = {
          pessoas,
          total: response['totalElements']
        };

        return resultado;
      });
  }
  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.produtosUrl}/${codigo}`).toPromise();
  }

  /*read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      //catchError((e) => this.errorHandler(e))
    );
  }

 readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
    //  catchError((e) => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
     // catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj)
     // catchError((e) => this.errorHandler(e))
    );
  }

  /*errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }*/
}
