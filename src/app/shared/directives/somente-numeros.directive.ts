import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cfSomenteNumeros]'
})
export class SomenteNumerosDirective {

  constructor(private _elemento: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._elemento.nativeElement.value;
    this._elemento.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this._elemento.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
