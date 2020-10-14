import { Data } from '@angular/router';

export interface Pontos {
    id: number
    nome_lugar: string;
    endereco_lugar: string;
    valor_lugar: number;
    createAt: Data;
    updateAt: Data;
}