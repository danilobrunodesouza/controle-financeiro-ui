import { NgModule } from '@angular/core';
import { SomenteNumerosDirective } from './somente-numeros.directive';
import { CommonModule } from '@angular/common';
import { MoedaDirective } from './moeda/moeda.directive';
import { SomenteNumerosMoedaDirective } from './somente-numeros-moeda.directive';

@NgModule({
    declarations : [ SomenteNumerosDirective, MoedaDirective, SomenteNumerosMoedaDirective ],
    exports : [ SomenteNumerosDirective, MoedaDirective, SomenteNumerosMoedaDirective],
    imports : [ CommonModule,
    ]
})
export class DirectivesModule {}