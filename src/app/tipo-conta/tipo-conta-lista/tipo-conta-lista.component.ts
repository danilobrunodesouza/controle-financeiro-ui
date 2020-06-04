import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoConta } from '../tipo-conta.interface';
import { TipoContaService } from '../tipo-conta.service';

@Component({
  selector: 'cf-tipo-conta-lista',
  templateUrl: './tipo-conta-lista.component.html',
  styleUrls: ['./tipo-conta-lista.component.css']
})
export class TipoContaListaComponent implements OnInit {

  categorias$ : Observable<TipoConta[]>;
  headers : any [] = ['Código', 'Descrição'];

  titulo : string = 'Lista de Tipos de Conta';
  urlDoObjeto : string = 'tipo-conta';

  comPaginacao : boolean = false;
  numeroDeLinhas : number = 10;

  constructor(private tipoContaService : TipoContaService) { }

  ngOnInit(): void {
    this.categorias$ = this._populaTabela();
  }
  _populaTabela(): Observable<TipoConta[]> {
    return this.tipoContaService.listaTudo();
  }

  recebeItemParaSerRemovido($event){
    alert("vc quer remover um item" + $event.id);
  }

}
