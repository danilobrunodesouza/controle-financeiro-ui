import { Categoria } from '../categoria/categoria.interface';

export interface Subcategoria {
    id : number, 
    titulo : string,
    icone : string,
    categoria : Categoria,
}