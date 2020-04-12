import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cf-input-text-padrao',
  templateUrl: './input-text-padrao.component.html',
  styleUrls: ['./input-text-padrao.component.css']
})
export class InputTextPadraoComponent implements OnInit {

  @Input() label : string = 'teste';
  @Input() formControlName : string = '';
  @Input() parentForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
