import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { Categoria } from 'src/app/categoria/categoria.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'cf-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.css']
})
export class RegistroFormularioComponent implements OnInit {

  formRegistro: FormGroup;
  idRegistro: number;

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
    this.idRegistro = this.activatedRoute.snapshot.params.idCategoria;

    this.formRegistro = this.formBuilder.group({
      data: ['', Validators.required],
      valor: ['', Validators.required],
      categoria: ['', Validators.required],
      descricao: ['', Validators.required],
    });

  }

  submitFormulario() {
    const id = this.idRegistro;
    const registro = this.formRegistro.getRawValue();
    console.log('registro', registro);
    

    alert("feito o submit");
  }


}
