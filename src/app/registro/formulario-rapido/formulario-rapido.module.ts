import { NgModule } from "@angular/core";
import { FormularioRapidoComponent } from './formulario-rapido.component';
import { CommonModule } from '@angular/common';

import { ListaCardPadraoModule } from 'src/app/shared/components/cards/lista-card-padrao/lista-card-padrao.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from 'src/app/shared/components/inputs/inputs.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';


@NgModule({
    declarations : [ FormularioRapidoComponent ],
    exports : [ FormularioRapidoComponent ],
    imports : [ 
        CommonModule,
        InputsModule,
        FormsModule,
        DirectivesModule,
        ReactiveFormsModule,
        ListaCardPadraoModule
     ],
})
export class FormularioRapidoModule {}