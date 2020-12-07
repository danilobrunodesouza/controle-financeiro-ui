import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { Categoria } from 'src/app/categoria/categoria.interface';
import { SubcategoriaService } from 'src/app/subcategoria/subcategoria.service';
import { Subcategoria } from 'src/app/subcategoria/subcategoria.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cf-formulario-rapido',
  templateUrl: './formulario-rapido.component.html',
  styleUrls: ['./formulario-rapido.component.css']
})
export class FormularioRapidoComponent implements OnInit {

  categorias: Categoria[] = [];
  subcategorias: Subcategoria[] = [];

  

  formularioRegistro : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private categoriaService: CategoriaService,
    private subcategoriaService : SubcategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.pegaTodasCategorias()
      .subscribe(categorias => {
        this.categorias = categorias;
      });

      this.formularioRegistro = this.formBuilder.group({
        idCategoria : ['', Validators.required],
        idSubcategoria : ['', Validators.required],
        data : ['', Validators.required],
        valor : ['', Validators.required],
      })
  }

  pegaCategoriaClicada(categoria : Categoria){
    this.formularioRegistro.get('idCategoria').setValue(categoria.id);
    this.subcategoriaService.pegaTodasDaCategoria(categoria)
    .subscribe(subcategorias => {
      this.subcategorias = subcategorias;
    });
  }
  
  pegaSubcategoriaClicada(subcategoria : Subcategoria){
    this.formularioRegistro.get('idSubcategoria').setValue(subcategoria.id);
    
  }

}
