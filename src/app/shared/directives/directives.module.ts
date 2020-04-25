import { NgModule } from '@angular/core';
import { SomenteNumerosDirective } from './somente-numeros.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations : [ SomenteNumerosDirective ],
    exports : [ SomenteNumerosDirective ],
    imports : [ CommonModule ]
})
export class DirectivesModule {}