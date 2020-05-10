import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subcategoria } from './subcategoria.interface';
import { CategoriaModel } from '../categoria/categoria.model';
import { Categoria } from '../categoria/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  constructor() { }

  pegaTodas() : Observable<Subcategoria[]>{
    return of([
      {
        id: 1, icone: 'fa fa-home', titulo: 'aluguel', categoria: new CategoriaModel(1, 'fa fa-home', 'Moradia'),      
      },
      {
        id: 2, icone: 'fa fa-home', titulo: 'luz', categoria: new CategoriaModel(1, 'fa fa-home', 'Moradia'),
      },
      {
        id: 3, icone: 'fa fa-car', titulo: 'carro', categoria: new CategoriaModel(3, 'fa fa-subway', 'Transporte'),
      },
      
    ]);
  }

  pegaTodasDaCategoria(categoria : Categoria) : Observable<Subcategoria[]>{
    return of([
      {
        id: 1, icone: 'fa fa-home', titulo: 'aluguel', categoria: new CategoriaModel(1, 'fa fa-home', 'Moradia'),      
      },
      {
        id: 1, icone: 'fa fa-building', titulo: 'Condonimio', categoria: new CategoriaModel(1, 'fa fa-home', 'Moradia'),      
      },
      {
        id: 1, icone: 'fa fa-building-o', titulo: 'prestação imóvel', categoria: new CategoriaModel(1, 'fa fa-home', 'Moradia'),      
      },
    ]);

  }

}
