import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListavisitaService} from '../../services/listavisita.service';
@Component({
  selector: 'app-lista-visita',
  templateUrl: './lista-visita.component.html',
  styleUrls: ['./lista-visita.component.css']
})
export class ListaVisitaComponent implements OnInit {

  id:number;
  listavisita: any;

  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService ) { }

  ngOnInit(): void {
      
  }

  ngVisitasId(){
    this.route.params.subscribe(params => {
      this.id = params['id']

      this.listaServ.getListaVisita(this.id).
      subscribe(listavisita => this.listavisita = listavisita);
    });
  }
  

  }

