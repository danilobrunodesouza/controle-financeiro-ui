import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.interface';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  categorias : Categoria[] = []
  headers : any [] = ['Código', 'Ícone', 'Título'];

  titulo : string = 'Lista de Categorias';
  urlDoObjeto : string = 'categoria';

  comPaginacao : boolean = false;
  numeroDeLinhas : number = 10;

  constructor() { }

  ngOnInit(): void {
    this.categorias = this._populaCategorias();
  }
  _populaCategorias(): Categoria[] {
    return [
      { id : 1, icone : 'fa fa-home', titulo : "Moradia"},
      { id : 2, icone : 'fa fa-graduation-cap', titulo : "Educação"},
      { id : 3, icone : 'fa fa-car', titulo : "Carro"},
      { id : 4, icone : 'fa fa-file', titulo : "Conta Fixa"},
    ];
  }

  recebeItemParaSerRemovido($event){
    alert("vc quer remover um item" + $event.id);
  }
}
