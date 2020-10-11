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

  constructor(private route: ActivatedRoute, private listaServ: ListavisitaService ) { 
    listaServ.getTodosListavisita()
    .subscribe(listavisita => this.listavisita = listavisita[''])
  }

  ngOnInit(): void {
      
  }

  ngVisitasId(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']

      this.listaServ.getListaVisita(this.id).
      subscribe(listavisita => this.listavisita = listavisita);
    },
    erro => {
      if(erro.status == 404) {
        alert('Destino não localizado')
      }
    });
  }

  salvarNovo() {
    const novoDestino = {name:''}
      this.listaServ.createListaVisita(novoDestino).
      subscribe(destino => this.listavisita.push(destino));
  }

  atualizacaoDestino() {
    const atualizarDestino = { id: '', name: ''}
    this.listaServ.updateListaVisita(this.listavisita,'id').subscribe();
    this.listavisita = this.listavisita.filter( d => d.id == atualizarDestino.id );
  }

  onDeleteDestino(): void {
    const meuDestino = { id: '', name: '' } ;
    this.listaServ.deleteListaVisita(meuDestino.id).subscribe();
    this.listavisita = this.listavisita.filter( d => d.id == meuDestino.id );
  }

}
