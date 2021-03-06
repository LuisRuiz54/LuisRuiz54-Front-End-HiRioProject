import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ListavisitaService} from '../../services/listavisita.service';
import {Listas} from '../listavisitas/Listas'
import { Pontos } from '../pontos-turisticos/Pontos';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-visita',
  templateUrl: './lista-visita.component.html',
  styleUrls: ['./lista-visita.component.css']
})
export class ListaVisitaComponent implements OnInit {

listas = {} as Listas;
lista: Listas [];

pontos = {} as Pontos;
ponto: Pontos [];


nome_lista: string  = '0';
verSeleccion: string        = '';


  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService ) { 

  }

  ngOnInit(): void {
    this.getPontosTuristicos();
    
  }


  SaveList(form: NgForm) {
    if (this.listas.id !== undefined) {
      this.listaServ.updateListaVisita(this.listas).subscribe(() => {
        this.cleanForm(form);
        Swal.fire('Obrigada','Dados guardados corretamente, Visite a seção Meus Destinos para visualizar suas visitas','success' )
      });
    } else {
      this.listaServ.createListaVisita(this.listas).subscribe(() => {
        this.cleanForm(form);
        Swal.fire('Obrigada','Dados guardados corretamente, Visite a seção Meus Destinos para visualizar suas visitas','success' )
      });
    }
  }

// limpa o formulario
  cleanForm(form: NgForm) {
    this.listaServ.getTodosListavisita();
    form.resetForm();
  }

  getPontosTuristicos(){
    this.listaServ.getTodosPontosTuristicos()
    .subscribe(dados => {
    this.ponto = dados.lista;
    });
  }

  
  teste() {
    this.verSeleccion = this.listas.nome_lista;
    
  }

}



