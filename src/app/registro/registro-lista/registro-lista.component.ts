import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro.interface';
import { CategoriaModel } from 'src/app/categoria/categoria.model';

@Component({
  selector: 'app-registro-lista',
  templateUrl: './registro-lista.component.html',
  styleUrls: ['./registro-lista.component.css']
})
export class RegistroListaComponent implements OnInit {

  registros: Registro[] = [];

  titulo = 'Lista de Registros';

  headers = ['Código', 'Data', 'Categoria', 'Descrição', 'Valor'];

  urlDoObjeto = 'registro'

  comPaginacao : boolean = true;
  numeroDeLinhas : number = 10;

  constructor() { }

  ngOnInit(): void {
    this.registros = this._pegaRegistros();
  }
  _pegaRegistros(): Registro[] {
    return [
      {
        id: 1, data: new Date(), categoria: new CategoriaModel(1, 'fa fa-home', 'Moradia'),
        descricao: "descricao", valor: 100
      },
      {
        id: 2, data: new Date(), categoria : new CategoriaModel(2, 'fa fa-graduation-cap', 'Educação'),
        descricao: "descricao2", valor: 50
      },
      {
        id: 3, data: new Date(), categoria : new CategoriaModel(2, 'fa fa-car', 'Carro'),
        descricao: "descricao3", valor: 25
      },
    ];
}

recebeItemParaSerRemovido($event) {
  console.log("item para ser removido ");

}

}
