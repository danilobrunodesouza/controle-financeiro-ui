import { CategoriaModel } from '../categoria/categoria.model';

export interface Registro {
    id : number,
    data : Date,
    categoria : CategoriaModel,
    descricao : string,
    valorMoeda: number,
}