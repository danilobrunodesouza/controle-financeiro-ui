import { NgModule } from "@angular/core";
import { ListaCardPadraoComponent } from './lista-card-padrao.component';
import { CommonModule } from '@angular/common';
import { CardPadraoModule } from './card-padrao/card-padrao.module';
import { EscurecerQuandoPassarMouseModule } from 'src/app/shared/directives/escurecer-quando-passar-mouse/escurecer-quando-passar-mouse.module';

@NgModule({
    declarations : [ListaCardPadraoComponent],
    exports : [ListaCardPadraoComponent],
    imports : [
        CommonModule,
        CardPadraoModule,
        EscurecerQuandoPassarMouseModule,
],
})
export class ListaCardPadraoModule {}