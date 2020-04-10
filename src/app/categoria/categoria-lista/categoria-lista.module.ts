import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { CategoriaListaComponent } from './categoria-lista.component';


import {TableModule} from 'primeng/table';
import { TabelaPadraoModule } from 'src/app/shared/components/tabela-padrao/tabela-padrao.module';


@NgModule({
    declarations : [ CategoriaListaComponent ],
    exports : [ CategoriaListaComponent ],
    imports : [ 
        CommonModule, 
        TableModule,
        TabelaPadraoModule
     ],
})
export class CategoriaListaModule {}