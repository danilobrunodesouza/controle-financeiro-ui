import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Registro } from './registro.interface';
import { CategoriaModel } from '../categoria/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }


pegaTodosRegistros() : Observable<Registro[]>{
  return of([
    {
      id: 1, data: new Date(), categoria: new CategoriaModel(1, 'fa fa-home', 'Moradia'),
      descricao: "condomínio", valor: 600
    },
    {
      id: 2, data: new Date(), categoria : new CategoriaModel(2, 'fa fa-graduation-cap', 'Educação'),
      descricao: "alura", valor: 75
    },
    {
      id: 3, data: new Date(), categoria : new CategoriaModel(2, 'fa fa-car', 'Carro'),
      descricao: "gasolina", valor: 155
    },
    {
      id: 4, data: new Date(), categoria : new CategoriaModel(2, 'fa fa-shopping-cart', 'Mercado'),
      descricao: "mercado", valor: 250
    },
    {
      id: 5, data: new Date(), categoria : new CategoriaModel(2, 'fa fa-file', 'Conta Fixa'),
      descricao: "internet", valor: 100
    },
  ]);
}

}
