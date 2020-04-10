import { NgModule } from "@angular/core";
import { CategoriaComponent } from './categoria.component';
import { CommonModule } from '@angular/common';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaListaModule } from './categoria-lista/categoria-lista.module';

@NgModule({
    declarations : [ CategoriaComponent ],
    exports : [ CategoriaComponent ],
    imports : [ 
        CommonModule,
        CategoriaListaModule
     ],
})
export class CategoriaModule {}