import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListavisitaService} from '../../services/listavisita.service';

@Component({
  selector: 'app-listavisitas',
  templateUrl: './listavisitas.component.html',
  styleUrls: ['./listavisitas.component.css']
})
export class ListavisitasComponent implements OnInit {

visita: any;
id : number;

  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']

      this.listaServ.getListaVisita(this.id).
      subscribe(visita => {
      this.visita = visita;
      console.log(this.visita);
    });
  });

  }
}
