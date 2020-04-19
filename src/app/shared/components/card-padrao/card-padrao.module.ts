import { NgModule } from "@angular/core";
import { CardPadraoComponent } from './card-padrao.component';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';

@NgModule({
    declarations : [CardPadraoComponent],
    exports : [CardPadraoComponent],
    imports : [
        CommonModule,
        CardModule,
    ],
})
export class CardPadraoModule {}