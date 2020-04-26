import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MenuPrincipalComponent } from './menu-principal.component';
import { CardPadraoModule } from '../shared/components/card-padrao/card-padrao.module';

@NgModule({
    declarations : [ MenuPrincipalComponent ],
    exports : [ MenuPrincipalComponent ],
    imports : [ 
        CommonModule,
        CardPadraoModule
     ],
})
export class MenuPrincipalModule {}