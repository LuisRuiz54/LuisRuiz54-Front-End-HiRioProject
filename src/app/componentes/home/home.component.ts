import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swal.fire('Bem-vindo a Hi-Rio','Visite nossa seção de Pontos Turisticos e conheça os principais lugares que sugerimos para você conhecer', 'info')
  }

}
