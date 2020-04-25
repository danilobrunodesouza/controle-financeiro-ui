import { NgModule } from "@angular/core";
import { SubcategoriaListaComponent } from './subcategoria-lista.component';
import { CommonModule } from '@angular/common';
import { TabelaPadraoModule } from 'src/app/shared/components/tabela-padrao/tabela-padrao.module';

@NgModule({
    declarations : [ SubcategoriaListaComponent ],
    exports : [ SubcategoriaListaComponent ],
    imports : [ 
        CommonModule,
        TabelaPadraoModule,
     ],
})
export class SubcategoriaListaModule {}