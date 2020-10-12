import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListavisitaService} from '../../services/listavisita.service';
import {Listas} from './Listas'
@Component({
  selector: 'app-listavisitas',
  templateUrl: './listavisitas.component.html',
  styleUrls: ['./listavisitas.component.css']
})
export class ListavisitasComponent implements OnInit {

listas = {} as Listas;
lista: Listas [];


  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService) { }

  ngOnInit(): void {
   // this.getListaVisita();

  }

  

  getListaVisita(){
   // this.listaServ.getTodosListavisita()
    //.subscribe((dados: Listas[]) => {
    //  this.lista = dados;
   // });
  }


}

