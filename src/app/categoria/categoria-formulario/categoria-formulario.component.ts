import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cf-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css']
})
export class CategoriaFormularioComponent implements OnInit {

  formCategoria : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formCategoria = this.formBuilder.group({
      id : [''], 
      titulo : ['', Validators.required],
      icone : ['', Validators.required],
    });
  }

  submitFormulario(){
    const id = this.formCategoria.get('id').value;
    const titulo = this.formCategoria.get('titulo').value;
    const icone = this.formCategoria.get('icone').value;

    console.log([id, titulo, icone].join(" - "));
    
  }

}
