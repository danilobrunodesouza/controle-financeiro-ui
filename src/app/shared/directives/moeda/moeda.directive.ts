import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cfMoeda]'
})
export class MoedaDirective {

  constructor(private _elemento: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    
    
    
    
  }

}
