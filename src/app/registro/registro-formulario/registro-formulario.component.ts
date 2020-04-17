import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cf-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.css']
})
export class RegistroFormularioComponent implements OnInit {

  formRegistro: FormGroup;
  idRegistro: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
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
    const data = this.formRegistro.get('data').value;
    const valor = this.formRegistro.get('valor').value;
    const categoria = this.formRegistro.get('categoria').value;
    const descricao = this.formRegistro.get('descricao').value;

    if (!!id) {
      console.log({id, data, valor, categoria, descricao});
    } else {
      console.log({data, valor, categoria, descricao});
    }

    alert("feito o submit");
  }


}
