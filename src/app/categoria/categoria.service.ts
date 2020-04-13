import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categoria } from './categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  pegaTodasCategorias(): Observable<Categoria[]> {
    return of([
      { id: 1, icone: 'fa fa-home', titulo: "Moradia" },
      { id: 2, icone: 'fa fa-graduation-cap', titulo: "Educação" },
      { id: 3, icone: 'fa fa-car', titulo: "Carro" },
      { id: 3, icone: 'fa fa-subway', titulo: "Transporte" },
      { id: 4, icone: 'fa fa-file', titulo: "Conta Fixa" },
      { id: 6, icone: 'fa fa-shopping-cart', titulo: "Supermercado" },
    ]);
  }
}
