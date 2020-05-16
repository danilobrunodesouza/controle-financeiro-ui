import { NgModule } from '@angular/core';
import { SomenteNumerosDirective } from './somente-numeros.directive';
import { CommonModule } from '@angular/common';
import { MoedaDirective } from './moeda/moeda.directive';

@NgModule({
    declarations : [ SomenteNumerosDirective, MoedaDirective ],
    exports : [ SomenteNumerosDirective],
    imports : [ CommonModule,
    ]
})
export class DirectivesModule {}