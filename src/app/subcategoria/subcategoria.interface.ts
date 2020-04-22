import { Categoria } from '../categoria/categoria.interface';

export interface Subcategoria {
    id : number, 
    categoria : Categoria,
    titulo : string,
    icone : string,
}