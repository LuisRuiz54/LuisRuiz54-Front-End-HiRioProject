import { Data } from '@angular/router';

export interface Listas {
    id: number;
    id_lugar: number;
    nome_lista: string;
    visitou_lista: boolean;
    comentarios_lista: string;
    valor_lista: number;
    createAt: Data;
    updateAt: Data;
    
}