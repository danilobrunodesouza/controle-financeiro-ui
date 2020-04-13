import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.interface';
import { CategoriaService } from '../categoria.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cf-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  categorias$ : Observable<Categoria[]>;
  headers : any [] = ['Código', 'Ícone', 'Título'];

  titulo : string = 'Lista de Categorias';
  urlDoObjeto : string = 'categoria';

  comPaginacao : boolean = false;
  numeroDeLinhas : number = 10;

  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    this.categorias$ = this._populaCategorias();
  }
  _populaCategorias(): Observable<Categoria[]> {
    return this.categoriaService.pegaTodasCategorias();
  }

  recebeItemParaSerRemovido($event){
    alert("vc quer remover um item" + $event.id);
  }
}
