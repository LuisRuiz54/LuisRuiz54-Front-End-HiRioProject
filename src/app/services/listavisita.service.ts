import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Listas} from '../componentes/listavisitas/Listas'
import {Pontos} from '../componentes/pontos-turisticos/Pontos'
import {catchError, map, retry, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ListavisitaService {

  

  constructor(private http: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
    getTodosListavisita() {
      return this.http.get<Listas>('http://localhost:3000/listavisitas').
      pipe(
        tap(console.log),
        retry(2),
        catchError(this.handleError))
    }
   
    getListaVisita(id: number): Observable<Listas>{
      return this.http.get<Listas>('http://localhost:3000/listavisitas/'+id).
      pipe(
        retry(2),
        catchError(this.handleError)
      )

    }

    getTodosPontosTuristicos() {
      return this.http.get<Pontos>('http://localhost:3000/lugares/').
      pipe(
        tap(console.log),
        retry(2),
        catchError(this.handleError)
      )
    }


    createListaVisita(listavisitas: Listas): Observable<Listas> {
      return this.http.post<Listas>('http://localhost:3000/listavisitas/', JSON.stringify(listavisitas), this.httpOptions).
      pipe(
        retry(2),
        catchError(this.handleError)
      )
      
    }

    updatetListaVisita(listavisitas: Listas): Observable<Listas> {
      return this.http.put<Listas>('http://localhost:3000/listavisitas/'+ listavisitas.id, JSON.stringify(listavisitas), this.httpOptions).
      pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    deleteListaVisita(listavisitas: Listas): Observable<Listas> {
      return this.http.delete<Listas>('http://localhost:3000/listavisitas/'+ listavisitas.id,  this.httpOptions);
    
    }

    // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
    }

