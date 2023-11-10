import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from '../../environments/environment';
import { Usuario } from '../usuario/usuario';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UsuarioCadstroServiceService {
  private readonly API = 'http://localhost:3000/pensamentos'
 
  constructor(private http: HttpClient) {
   
  }

 
  criar(pensamento: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, pensamento)
  }

 
}
