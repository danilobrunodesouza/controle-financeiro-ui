import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro.interface';
import { CategoriaModel } from 'src/app/categoria/categoria.model';
import { RegistroService } from '../registro.service';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'fc-registro-lista',
  templateUrl: './registro-lista.component.html',
  styleUrls: ['./registro-lista.component.css']
})
export class RegistroListaComponent implements OnInit {

  registros$: Observable<Registro[]>;

  titulo = 'Lista de Registros';

  headers = ['Código', 'Data', 'Categoria', 'Descrição', 'Valor'];

  urlDoObjeto = 'registro'

  comPaginacao: boolean = true;
  numeroDeLinhas: number = 10;

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
    this.registros$ = this._pegaRegistros();
  }
  _pegaRegistros(): Observable<Registro[]> {
    return this.registroService.pegaTodosRegistros();
  }

  recebeItemParaSerRemovido($event) {
    console.log("item para ser removido ");

  }

}
