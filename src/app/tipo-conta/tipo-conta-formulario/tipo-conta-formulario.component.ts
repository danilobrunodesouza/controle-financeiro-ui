import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cf-tipo-conta-formulario',
  templateUrl: './tipo-conta-formulario.component.html',
  styleUrls: ['./tipo-conta-formulario.component.css']
})
export class TipoContaFormularioComponent implements OnInit {


  formTipoConta: FormGroup;
  idTipoConta: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.idTipoConta = this.activatedRoute.snapshot.params.idTipoConta;

    this.formTipoConta = this.formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
    });

  }

  submitFormulario() {
    const id = this.idTipoConta;
    const descricao = this.formTipoConta.get('descricao').value;

    if (!!id) {
      console.log({ id, descricao });
    } else {
      console.log({ descricao });
    }

    alert("feito o submit");
  }
}
