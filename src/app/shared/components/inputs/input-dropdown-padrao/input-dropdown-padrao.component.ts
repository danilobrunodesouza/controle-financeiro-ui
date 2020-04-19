import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/categoria/categoria.interface';

@Component({
  selector: 'cf-input-dropdown-padrao',
  templateUrl: './input-dropdown-padrao.component.html',
  styleUrls: ['./input-dropdown-padrao.component.css']
})
export class InputDropdownPadraoComponent implements OnInit {
  
  @Input() options : any[];
  @Input() label : string;
  @Input() optionLabel : string;
  @Input() dataKey : string;
  @Input() nomeFormulario : string;
  @Input() parentForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    
    console.log("Iniciando dropdown");
    console.log(this.optionLabel);
    console.log(this.dataKey);
    
    

  }

}
