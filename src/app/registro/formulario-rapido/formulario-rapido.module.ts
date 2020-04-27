import { NgModule } from "@angular/core";
import { FormularioRapidoComponent } from './formulario-rapido.component';
import { CommonModule } from '@angular/common';

import { ListaCardPadraoModule } from 'src/app/shared/components/cards/lista-card-padrao/lista-card-padrao.module';


@NgModule({
    declarations : [ FormularioRapidoComponent ],
    exports : [ FormularioRapidoComponent ],
    imports : [ 
        CommonModule,
        ListaCardPadraoModule
     ],
})
export class FormularioRapidoModule {}