import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVisitaComponent } from './componentes/lista-visita/lista-visita.component';
import {PontosTuristicosComponent} from './componentes/pontos-turisticos/pontos-turisticos.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { ListavisitasComponent } from './componentes/listavisitas/listavisitas.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ListaVisitaComponent,
    PontosTuristicosComponent,
    HomeComponent,
    ListavisitasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
