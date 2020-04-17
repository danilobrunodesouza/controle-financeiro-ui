import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cf-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css']
})
export class CategoriaFormularioComponent implements OnInit {

  formCategoria: FormGroup;
  idCategoria: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.idCategoria = this.activatedRoute.snapshot.params.idCategoria;

    this.formCategoria = this.formBuilder.group({
      titulo: ['', Validators.required],
      icone: ['', Validators.required],
    });

  }

  submitFormulario() {
    const id = this.idCategoria;
    const titulo = this.formCategoria.get('titulo').value;
    const icone = this.formCategoria.get('icone').value;

    if (!!id) {
      console.log({ id, titulo, icone });
    } else {
      console.log({ titulo, icone });
    }

    alert("feito o submit");
  }

}
