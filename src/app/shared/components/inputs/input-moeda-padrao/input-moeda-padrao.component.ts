import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

const KEY_BACKSPACE = 8;

@Component({
  selector: 'cf-input-moeda-padrao',
  templateUrl: './input-moeda-padrao.component.html',
  styleUrls: ['./input-moeda-padrao.component.css']
})
export class InputMoedaPadraoComponent implements OnInit {

  @Input() label: string = '';
  @Input() nomeFormulario: string = '';
  @Input() parentForm: FormGroup;

  stringDigitada: string = '';

  constructor() { }

  ngOnInit(): void { }

  mudouCampoMoeda($event) {
    if (this._estaApagando($event)) {
      this._removeUltimoCaracterDigitado();
    } else {
      this._adicionaUltimoCaracterDigitado($event);
    }

    this._atribuiValorParaMoeda();
  }

  _adicionaUltimoCaracterDigitado($event) {
    this.stringDigitada += this._pegaUltimoValorDigitado($event);
  }

  _removeUltimoCaracterDigitado() {
    this.stringDigitada = this.stringDigitada.substring(0, this.stringDigitada.length - 1);
  }

  _pegaUltimoValorDigitado($event): string {
    const valorReal: string = $event.target.value.replace(/\D/g, "");;
    return valorReal.substr(valorReal.length - 1);
  }

  _atribuiValorParaMoeda() {
    const moeda = +this.stringDigitada / 100;
    this.parentForm.get(this.nomeFormulario)
      .setValue(
        moeda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          .replace('R$', '')
      );
  }

  _estaApagando($event): boolean {
    return !!$event.which && $event.which == KEY_BACKSPACE
  }

}
