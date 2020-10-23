import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListavisitaService} from '../../services/listavisita.service';
import {Listas} from './Listas'
import {Pontos} from '../pontos-turisticos/Pontos'
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

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

formVisibility= false;


  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService) { 
    this.formVisibility= false;
  }

  ngOnInit(): void {
    this.getListaVisita();

  }
  
  ShowForm(){
    this.formVisibility=true;
    console.log(this.formVisibility);
  }
  getPontosTuristicos(){
    this.listaServ.getTodosPontosTuristicos()
    .subscribe(dados => {
    this.ponto = dados.lista;
    });
  }

  // getPontosTuristicosId(){
  //   this.listaServ.getLugaresById(id)
  //   .subscribe(dados => {
  //   this.ponto = dados.lista;
  //   });
  // }

  getListaVisita(){
    this.listaServ.getTodosListavisita()
    .subscribe(dados => {
    this.lista = dados.lista;
    });
  }

  SaveList(form: NgForm) {
    if (this.listas.id !== undefined) {
      this.listaServ.updateListaVisita(this.listas).subscribe(() => {
        this.cleanForm(form);
        Swal.fire('Obrigada','Dados atualizados corretamente','success' )
        this.formVisibility=false;
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
    Swal.fire({
      title: 'Deseja editar seu registro?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, desejo editar',
      cancelButtonText: 'Não, não quero editar',
    }).then((result) => {
      if (result.isConfirmed){
        this.formVisibility=true;
        console.log(this.formVisibility)
        this.listas = { ...Lista };
      }
      else {
        Swal.fire('Cancelado', 'Operação Cancelada','error')
      }

    })
    
  }

  deleteLista(Lista: Listas) {
    Swal.fire({
      title: 'Deseja deletar seu registro?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, pode deletar',
      cancelButtonText: 'Não, não quero deletar',
    }).then((result) => {
      if (result.isConfirmed){
        this.listaServ.deleteListaVisita(Lista).subscribe(() => {
          this.getListaVisita();
          Swal.fire('Obrigada','Dados deletados corretamente','success' )
        });
      }
      else {
        Swal.fire('Cancelado', 'Operação Cancelada','error')
      }

    })
    
  }

}

