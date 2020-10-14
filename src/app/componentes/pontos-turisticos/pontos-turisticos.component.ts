import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListavisitaService} from '../../services/listavisita.service';
import { Pontos } from './Pontos';

@Component({
  selector: 'app-pontos-turisticos',
  templateUrl: './pontos-turisticos.component.html',
  styleUrls: ['./pontos-turisticos.component.css']
})
export class PontosTuristicosComponent implements OnInit {

pontos = {} as Pontos;
ponto: Pontos [];

  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService) { }

  ngOnInit(): void {
    this.getPontosTuristicos();
  }

  getPontosTuristicos(){
    this.listaServ.getTodosPontosTuristicos()
    .subscribe(dados => {
    this.ponto = dados.lista;
    });
  }

}
