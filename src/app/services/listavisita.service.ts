import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListavisitaService {

  listavisitas: any [];

  constructor(private http: HttpClient) {}

    getTodosListavisita() {
      return this.http.get('https://localhost:3000/listavisita/');
    }

    getListaVisita(id){
      return this.http.get('https://localhost:3000/listavisita/'+id);

    }
}
