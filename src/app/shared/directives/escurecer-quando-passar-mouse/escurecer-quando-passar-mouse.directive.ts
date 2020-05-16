import { ElementRef, Directive, HostListener, Renderer2 } from '@angular/core';


@Directive({
    selector: '[cfEscurecerQuandoPassarMouse]'
  })
export class EscurecerQuandoPassarMouseDirective {

    constructor(private el : ElementRef,
        private render : Renderer2){}

    @HostListener('mouseover')
    escurecer(){
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
    }
    
    @HostListener('mouseleave')
    voltaAoPadrao(){
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');

    }

}