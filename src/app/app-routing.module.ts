import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaVisitaComponent} from '../app/componentes/lista-visita/lista-visita.component'
import {HomeComponent} from '../app/componentes/home/home.component'
import {ListavisitasComponent} from '../app/componentes/listavisitas/listavisitas.component'
import { PontosTuristicosComponent } from './componentes/pontos-turisticos/pontos-turisticos.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent },
  {path: 'listavisitas', component: ListavisitasComponent },
  {path: 'listavisitas/:id', component: ListavisitasComponent },
  {path: 'listavisita', component:  ListaVisitaComponent},
  {path: 'lugares', component:  PontosTuristicosComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
