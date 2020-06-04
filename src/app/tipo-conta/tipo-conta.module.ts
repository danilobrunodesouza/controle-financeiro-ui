import { NgModule } from "@angular/core";
import { TipoContaComponent } from './tipo-conta.component';
import { CommonModule } from '@angular/common';
import { TipoContaListaModule } from './tipo-conta-lista/tipo-conta-lista.module';
import { TipoContaFormularioModule } from './tipo-conta-formulario/tipo-conta-formulario.module';

@NgModule({
    declarations: [TipoContaComponent],
    exports: [TipoContaComponent],
    imports: [
        CommonModule,
        TipoContaListaModule,
        TipoContaFormularioModule],
})
export class TipoContaModule { }