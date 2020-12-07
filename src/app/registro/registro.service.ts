import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Registro } from './registro.interface';
import { CategoriaModel } from '../categoria/categoria.model';
import { RegistroDTO } from './registro-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }
  pegaTodasEntradasESaidasDoAno(): Observable<RegistroDTO[]> {
    return of(
      [
        {
          titulo: 'Entrada', valores: [65, 59, 80, 81, 56, 55, 40, 34, 54, 67, 23, 65]
        },
        {
          titulo: 'Saída', valores: [28, 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 34],
        },
      ]);
  }

  pegaTodosLancamentosDoAno(): Observable<RegistroDTO[]> {
    return of(
      [
        {
          titulo: 'Internet', valores: [65, 59, 80, 81, 56, 55, 40, 34, 54, 67, 23, 65]
        },
        {
          titulo: 'Luz', valores: [28, 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 34],
        },
        {
          titulo: 'Água', valores: [90, 81, 56, 55, 40, 34, 28, 48, 40, 19, 86, 27],
        },
        {
          titulo: 'Netflix', valores: [28, 28, 28, 28, 28, 28, 33, 33, 33, 33, 33, 33,],
        },
        {
          titulo: 'Gasolina', valores: [40, 34, 54, 67, 23, 65, 65, 59, 80, 81, 56, 55, ]
        },
        {
          titulo: 'Mercado', valores: [28, 48, 56, 55, 40, 34, 40, 19, 86, 27, 90, 81],
        },
        {
          titulo: 'Café', valores: [ 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 34, 28,],
        },
      ]
    )
  }



  pegaTodosRegistros(): Observable<Registro[]> {
    return of([
      {
        id: 1, data: new Date(), categoria: new CategoriaModel(1, 'fa fa-home', 'Moradia'),
        descricao: "condomínio", valorMoeda: 600
      },
      {
        id: 2, data: new Date(), categoria: new CategoriaModel(2, 'fa fa-graduation-cap', 'Educação'),
        descricao: "alura", valorMoeda: 400
      },
      {
        id: 3, data: new Date(), categoria: new CategoriaModel(2, 'fa fa-car', 'Carro'),
        descricao: "gasolina", valorMoeda: 155
      },
      {
        id: 4, data: new Date(), categoria: new CategoriaModel(2, 'fa fa-shopping-cart', 'Mercado'),
        descricao: "mercado", valorMoeda: 250
      },
      {
        id: 5, data: new Date(), categoria: new CategoriaModel(2, 'fa fa-file', 'Conta Fixa'),
        descricao: "internet", valorMoeda: 100
      }
    ]);
  }

}
