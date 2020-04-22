import { NgModule } from "@angular/core";
import { SubcategoriaListaComponent } from './subcategoria-lista.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations : [ SubcategoriaListaComponent ],
    exports : [ SubcategoriaListaComponent ],
    imports : [ CommonModule ],
})
export class SubcategoriaListaModule {}