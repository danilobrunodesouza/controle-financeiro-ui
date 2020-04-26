import { NgModule } from '@angular/core';
import { SomenteNumerosDirective } from './somente-numeros.directive';
import { CommonModule } from '@angular/common';
import { MoedaDirective } from './moeda.directive';

@NgModule({
    declarations : [ SomenteNumerosDirective, MoedaDirective ],
    exports : [ SomenteNumerosDirective, MoedaDirective ],
    imports : [ CommonModule ]
})
export class DirectivesModule {}