import { Component, OnInit } from '@angular/core';
import { Subcategoria } from '../subcategoria.interface';
import { Observable } from 'rxjs';
import { SubcategoriaService } from '../subcategoria.service';

@Component({
  selector: 'cf-subcategoria-lista',
  templateUrl: './subcategoria-lista.component.html',
  styleUrls: ['./subcategoria-lista.component.css']
})
export class SubcategoriaListaComponent implements OnInit {

  subcategorias$: Observable<Subcategoria[]>;

  titulo = 'Lista de Subcategoria';

  headers = ['Código', 'Ícone', 'Título', 'Categoria'];

  urlDoObjeto = 'subcategoria'

  comPaginacao: boolean = true;
  numeroDeLinhas: number = 10;

  constructor(private subcategoriaService : SubcategoriaService) { }

  ngOnInit(): void {
    this.subcategorias$ = this.subcategoriaService.pegaTodas();
  }

  recebeItemParaSerRemovido($event){
    alert("item para ser removido");
  }
}
