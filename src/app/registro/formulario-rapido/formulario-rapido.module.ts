import { NgModule } from "@angular/core";
import { FormularioRapidoComponent } from './formulario-rapido.component';
import { CommonModule } from '@angular/common';
import { CardPadraoModule } from 'src/app/shared/components/card-padrao/card-padrao.module';


@NgModule({
    declarations : [ FormularioRapidoComponent ],
    exports : [ FormularioRapidoComponent ],
    imports : [ 
        CommonModule,
        CardPadraoModule,
     ],
})
export class FormularioRapidoModule {}