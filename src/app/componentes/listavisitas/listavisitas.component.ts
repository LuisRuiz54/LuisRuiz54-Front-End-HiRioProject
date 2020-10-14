import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListavisitaService} from '../../services/listavisita.service';
import {Listas} from './Listas'
import {Pontos} from '../pontos-turisticos/Pontos'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-listavisitas',
  templateUrl: './listavisitas.component.html',
  styleUrls: ['./listavisitas.component.css']
})
export class ListavisitasComponent implements OnInit {

listas = {} as Listas;
lista: Listas [];

pontos = {} as Pontos;
ponto: Pontos[];
mostrar: boolean = false;

  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService) { 
    this.mostrar = false;
  }

  ngOnInit(): void {
   this.getListaVisita();

  }

  getPontosTuristicos(){
    this.listaServ.getTodosPontosTuristicos()
    .subscribe(dados => {
    this.ponto = dados.lista;
    });
  }

  getListaVisita(){
    this.listaServ.getTodosListavisita()
    .subscribe(dados => {
    this.lista = dados.lista;
    });
  }

  SaveList(form: NgForm) {
    if (this.listas.id !== undefined) {
      this.listaServ.updatetListaVisita(this.listas).subscribe(() => {
        this.cleanForm(form);
        this.getListaVisita();
      });
    } else {
      this.listaServ.createListaVisita(this.listas).subscribe(() => {
        this.cleanForm(form);
        this.getListaVisita();
      });
    }
  }

// limpa o formulario
   cleanForm(form: NgForm) {
    this.listaServ.getTodosListavisita();
    form.resetForm();
  }

  editLista(Lista: Listas) {
    this.listas = { ...Lista };
    this.mostrar = true;
  }

  deleteLista(Lista: Listas) {
    this.listaServ.deleteListaVisita(Lista).subscribe(() => {
      this.getListaVisita();
    });
  }


}

