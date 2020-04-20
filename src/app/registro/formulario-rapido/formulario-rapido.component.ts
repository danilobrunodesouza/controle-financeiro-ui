import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { Categoria } from 'src/app/categoria/categoria.interface';

@Component({
  selector: 'app-formulario-rapido',
  templateUrl: './formulario-rapido.component.html',
  styleUrls: ['./formulario-rapido.component.css']
})
export class FormularioRapidoComponent implements OnInit {

  categorias: Categoria[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.pegaTodasCategorias()
      .subscribe(categorias => {
        this.categorias = categorias
        console.log(this.categorias);
        
      });
  }

}
