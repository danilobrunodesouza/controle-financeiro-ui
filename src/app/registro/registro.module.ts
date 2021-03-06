import { NgModule } from "@angular/core";
import { RegistroComponent } from './registro.component';
import { CommonModule } from '@angular/common';
import { CategoriaModule } from '../categoria/categoria.module';
import { RegistroListaModule } from './registro-lista/registro-lista.module';
import { RegistroFormularioComponent } from './registro-formulario/registro-formulario.component';
import { RegistroFormularioModule } from './registro-formulario/registro-formulario.module';
import { FormularioRapidoComponent } from './formulario-rapido/formulario-rapido.component';
import { FormularioRapidoModule } from './formulario-rapido/formulario-rapido.module';

@NgModule({
    declarations : [ RegistroComponent ],
    exports : [ RegistroComponent ],
    imports : [
        CommonModule,
        RegistroListaModule,
        FormularioRapidoModule,
        RegistroFormularioModule,
        CategoriaModule,
    ]
})
export class RegistroModule {}