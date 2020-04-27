import { NgModule } from "@angular/core";
import { ListaCardPadraoComponent } from './lista-card-padrao.component';
import { CommonModule } from '@angular/common';
import { CardPadraoModule } from './card-padrao/card-padrao.module';

@NgModule({
    declarations : [ListaCardPadraoComponent],
    exports : [ListaCardPadraoComponent],
    imports : [
        CommonModule,
        CardPadraoModule
],
})
export class ListaCardPadraoModule {}