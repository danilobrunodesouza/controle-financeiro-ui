import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { Categoria } from 'src/app/categoria/categoria.interface';
import { SubcategoriaService } from 'src/app/subcategoria/subcategoria.service';

@Component({
  selector: 'app-formulario-rapido',
  templateUrl: './formulario-rapido.component.html',
  styleUrls: ['./formulario-rapido.component.css']
})
export class FormularioRapidoComponent implements OnInit {

  categorias: Categoria[];

  constructor(private categoriaService: CategoriaService,
    private subcategoriaService : SubcategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.pegaTodasCategorias()
      .subscribe(categorias => {
        this.categorias = categorias
        console.log(this.categorias);
        
      });
  }

  buscaSubcategorias(){
    alert('buscando subcategofria')
  }

}
