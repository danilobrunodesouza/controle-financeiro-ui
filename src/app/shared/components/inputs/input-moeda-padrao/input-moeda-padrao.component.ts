import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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

  stringDigitada : string = '';
  
  constructor() { }

  ngOnInit(): void {}

  mudou($event){
    const valorReal : string = $event.target.value.replace(/\D/g, "");;

    const ultimoChar = valorReal.substr(valorReal.length - 1);

    if(!!$event.which && $event.which != 8){
      this.stringDigitada += ultimoChar;
      console.log(this.stringDigitada);
      
      const moeda = +this.stringDigitada / 100;
      
      console.log(moeda);
      
      this.parentForm.get(this.nomeFormulario).setValue(moeda.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}).replace('R$', ''));
    } else {
      this.stringDigitada = this.stringDigitada.substring(0, this.stringDigitada.length - 1);
      const moeda = +this.stringDigitada / 100;
      
      console.log(moeda);
      
      this.parentForm.get(this.nomeFormulario).setValue(moeda.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}).replace('R$', ''));
    }
    
  }

}
