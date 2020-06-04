import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TipoConta } from './tipo-conta.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoContaService {

  constructor() { }


  listaTudo() : Observable<TipoConta[]>{
    return of([
      { id: 1, descricao : 'tipo conta 1'},
      { id: 2, descricao : 'tipo conta 2'},
      { id: 3, descricao : 'tipo conta 3'},
    ]);
  }
}
