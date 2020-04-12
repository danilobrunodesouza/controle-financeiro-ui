import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TabelaPadraoComponent } from './tabela-padrao.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { MostraDadosTabela } from './mostra-dados-tabela.pipe';

@NgModule({
    declarations : [
        TabelaPadraoComponent,
        MostraDadosTabela
    ],
    exports : [TabelaPadraoComponent ],
    imports : [
        CommonModule,
        RouterModule,
        TableModule,
        DialogModule,
        ButtonModule
     ]
})
export class TabelaPadraoModule {}