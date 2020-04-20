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
      { id: 1, icone: 'fa fa-home', titulo: "Moradia", cor : "#FF6384" },
      { id: 2, icone: 'fa fa-graduation-cap', titulo: "Educação", cor :"#4BC0C0" },
      { id: 3, icone: 'fa fa-user', titulo: "Pessoal", cor :"#FFCE56" },
      { id: 3, icone: 'fa fa-subway', titulo: "Transporte", cor :"#9900FF" },
      { id: 4, icone: 'fa fa-file', titulo: "Conta Fixa", cor :"#36A2EB" },
      { id: 6, icone: 'fa fa-shopping-cart', titulo: "Alimentação", cor: "#E7E9ED"},
      { id: 6, icone: 'fa fa-gamepad', titulo: "Entretenimento", cor: "#00A86B"},
    ]);
  }
}
