import { NgModule } from "@angular/core";
import { RegistroComponent } from './registro.component';
import { CommonModule } from '@angular/common';
import { CategoriaModule } from '../categoria/categoria.module';
import { RegistroListaModule } from './registro-lista/registro-lista.module';

@NgModule({
    declarations : [ RegistroComponent ],
    exports : [ RegistroComponent ],
    imports : [
        CommonModule,
        RegistroListaModule,
        CategoriaModule,
    ]
})
export class RegistroModule {}