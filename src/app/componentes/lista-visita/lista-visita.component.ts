import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ListavisitaService} from '../../services/listavisita.service';
import {Listas} from '../listavisitas/Listas'
import { Pontos } from '../pontos-turisticos/Pontos';


@Component({
  selector: 'app-lista-visita',
  templateUrl: './lista-visita.component.html',
  styleUrls: ['./lista-visita.component.css']
})
export class ListaVisitaComponent implements OnInit, OnChanges {

listas = {} as Listas;
lista: Listas [];

pontos = {} as Pontos;
ponto: Pontos [];



  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService ) { 
 
  }

  ngOnInit(): void {
    this.getPontosTuristicos();
  }


  SaveList(form: NgForm) {
    if (this.listas.id !== undefined) {
      this.listaServ.updateListaVisita(this.listas).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.listaServ.createListaVisita(this.listas).subscribe(() => {
        this.cleanForm(form);
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
  }

  getPontosTuristicos(){
    this.listaServ.getTodosPontosTuristicos()
    .subscribe(dados => {
    this.ponto = dados.lista;
    });
  }

  //função que busca pelo value do select para conseguir preencher um input com endereço do lugar
  onSelect(id:number){
  //  this.listaServ.getLugaresById(id)
  //  .subscribe(dados => {
   // this.ponto = dados.lista;
   //  });
  }



  }



