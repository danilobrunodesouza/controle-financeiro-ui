import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cfSomenteNumerosMoeda]'
})
export class SomenteNumerosMoedaDirective {

  constructor(private _elemento: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._elemento.nativeElement.value;
    console.log('somente nuum,eros moeda');
    

    this._elemento.nativeElement.value = initalValue.replace(/^[a-zA-Z]*$/, '');
    if ( initalValue !== this._elemento.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
