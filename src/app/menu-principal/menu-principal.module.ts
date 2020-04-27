import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MenuPrincipalComponent } from './menu-principal.component';
import { ListaCardPadraoModule } from '../shared/components/cards/lista-card-padrao/lista-card-padrao.module';

@NgModule({
    declarations : [ MenuPrincipalComponent ],
    exports : [ MenuPrincipalComponent ],
    imports : [ 
        CommonModule,
        ListaCardPadraoModule
     ],
})
export class MenuPrincipalModule {}