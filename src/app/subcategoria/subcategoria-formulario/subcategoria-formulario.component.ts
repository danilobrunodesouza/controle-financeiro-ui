import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/categoria/categoria.interface';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'cf-subcategoria-formulario',
  templateUrl: './subcategoria-formulario.component.html',
  styleUrls: ['./subcategoria-formulario.component.css']
})
export class SubcategoriaFormularioComponent implements OnInit {

  formSubcategoria: FormGroup;
  idSubcategoria: number;

  categorias : Categoria[];
  retorno = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private categoriaService : CategoriaService,
  ) { }

  ngOnInit(): void {
    this.categoriaService.pegaTodasCategorias().subscribe(categorias => {
      this.retorno = categorias.map(c => {
        return { label : c.titulo, value: c.id}
      })});
    this.idSubcategoria = this.activatedRoute.snapshot.params.idSubcategoria;

    this.formSubcategoria = this.formBuilder.group({
      icone: ['', Validators.required],
      titulo: ['', Validators.required],
      categoria: ['', Validators.required],
      
    });

  }

  submitFormulario() {
    const id = this.idSubcategoria;
    const icone = this.formSubcategoria.get('icone').value;
    const titulo = this.formSubcategoria.get('titulo').value;
    const categoria = this.formSubcategoria.get('categoria').value;
    

    if (!!id) {
      console.log({id, titulo, icone, categoria });
    } else {
      console.log({ titulo, icone, categoria });
    }

    alert("feito o submit");
  }


}
