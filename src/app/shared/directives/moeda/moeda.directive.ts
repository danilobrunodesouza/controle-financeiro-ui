import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cfMoeda]'
})
export class MoedaDirective {

  constructor(private _elemento: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._elemento.nativeElement.value;
    
    
    if ( initalValue !== this._elemento.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
