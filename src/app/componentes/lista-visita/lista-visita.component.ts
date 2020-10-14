import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ListavisitaService} from '../../services/listavisita.service';
import {Listas} from '../listavisitas/Listas'


@Component({
  selector: 'app-lista-visita',
  templateUrl: './lista-visita.component.html',
  styleUrls: ['./lista-visita.component.css']
})
export class ListaVisitaComponent implements OnInit {

  listas = {} as Listas;
  lista: Listas [];
  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService ) { 
  //  listaServ.getTodosListavisita()
    //.subscribe(listavisita => this.listavisita = listavisita[''])
  }

  ngOnInit(): void {
      
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

  }



