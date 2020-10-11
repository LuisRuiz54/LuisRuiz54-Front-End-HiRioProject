import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListavisitaService {

  listavisitas: any [];
  pontosturisticos: any [];

  constructor(private http: HttpClient) {}

    getTodosListavisita() {
      return this.http.get('https://localhost:3000/listavisita/');
    }

    getListaVisita(id){
      return this.http.get('https://localhost:3000/listavisita/'+id);

    }

    getTodosPontosTuristicos() {
      return this.http.get('https://localhost:3000/pontosturisticos/');
    }

    getPontosTuristicos(id){
      return this.http.get('https://localhost:3000/pontosturisticos/'+id);
    }

    createListaVisita(listavisitas: any) {
      return this.http.post('https://localhost:3000/listavisita/', listavisitas);
    }
    updateListaVisita(listavisitas: any, id) {
      return this.http.put('https://localhost:3000/listavisita/'+id, listavisitas);
    }

    deleteListaVisita(id){
      return this.http.delete('https://localhost:3000/listavisita/'+id);
    }
    }

