import { NgModule } from "@angular/core";
import { RegistroListaComponent } from './registro-lista.component';
import { CommonModule } from '@angular/common';
import { TabelaPadraoModule } from 'src/app/shared/components/tabela-padrao/tabela-padrao.module';

@NgModule({
    declarations : [ RegistroListaComponent ],
    exports : [ RegistroListaComponent ],
    imports : [ 
        CommonModule,
        TabelaPadraoModule
     ],
})
export class RegistroListaModule {}