import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListavisitaService {

  visitas: any [];
  pontosturisticos: any [];

  constructor(private http: HttpClient) {}

    getTodosListavisita() {
      return this.http.get('http://localhost:3000/listavisitas/');
    }

    getListaVisita(id){
      return this.http.get('http://localhost:3000/listavisitas/'+id);

    }

    getTodosPontosTuristicos() {
      return this.http.get('http://localhost:3000/pontosturisticos/');
    }

    getPontosTuristicos(id){
      return this.http.get('http://localhost:3000/pontosturisticos/'+id);
    }

    createListaVisita(listavisitas: any) {
      return this.http.post('http://localhost:3000/listavisitas/', listavisitas);
    }
    updatetListaVisita(listavisitas: any, id) {
      return this.http.put('http://localhost:3000/listavisitas/'+id, listavisitas);
    }

    deleteListaVisita(id){
      return this.http.delete('http://localhost:3000/listavisitas/'+id);
    }
    }

