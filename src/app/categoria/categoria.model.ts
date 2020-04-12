import { Categoria } from './categoria.interface';
import { Tabelavel } from '../shared/components/tabela-padrao/tabelavel.interface';

export class CategoriaModel implements Categoria, Tabelavel{
    id: number;
    icone: string;
    titulo: string;

    constructor(id : number, icone : string, titulo : string){
        this.id = id;
        this.icone = icone;
        this.titulo = titulo;
    }

    mostraNaTabela(): string {
        return ` <i class='${this.icone}'></i>  ${this.titulo}`;
    }

}