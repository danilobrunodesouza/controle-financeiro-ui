import { NgModule } from '@angular/core';
import { TipoContaListaComponent } from './tipo-conta-lista.component';
import { CommonModule } from '@angular/common';
import { TabelaPadraoModule } from 'src/app/shared/components/tabela-padrao/tabela-padrao.module';

@NgModule({
    declarations: [TipoContaListaComponent],
    exports: [TipoContaListaComponent],
    imports: [
        CommonModule,
        TabelaPadraoModule
    ],
})
export class TipoContaListaModule { }