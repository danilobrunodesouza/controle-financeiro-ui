import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cf-input-moeda-padrao',
  templateUrl: './input-moeda-padrao.component.html',
  styleUrls: ['./input-moeda-padrao.component.css']
})
export class InputMoedaPadraoComponent implements OnInit {
  
  @Input() label : string = '';
  @Input() nomeFormulario : string = '';
  @Input() parentForm : FormGroup;

  constructor() { }

  ngOnInit(): void {}

}
