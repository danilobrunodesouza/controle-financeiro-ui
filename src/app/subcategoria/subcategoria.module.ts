import { NgModule } from '@angular/core';
import { SubcategoriaComponent } from './subcategoria.component';
import { CommonModule } from '@angular/common';
import { SubcategoriaListaComponent } from './subcategoria-lista/subcategoria-lista.component';
import { SubcategoriaFormularioComponent } from './subcategoria-formulario/subcategoria-formulario.component';
import { SubcategoriaFormularioModule } from './subcategoria-formulario/subcategoria-formulario.module';
import { SubcategoriaListaModule } from './subcategoria-lista/subcategoria-lista.module';

@NgModule({
    declarations : [ SubcategoriaComponent ], 
    exports : [ SubcategoriaComponent ], 
    imports : [ 
        CommonModule,
        SubcategoriaFormularioModule,
        SubcategoriaListaModule
     ]
})
export class SubcategoriaModule {}