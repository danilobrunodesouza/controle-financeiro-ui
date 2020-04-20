import { NgModule } from "@angular/core";
import { CardPadraoComponent } from './card-padrao.component';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
    declarations : [CardPadraoComponent],
    exports : [CardPadraoComponent],
    imports : [
        CommonModule,
        CardModule,
        ButtonModule
    ],
})
export class CardPadraoModule {}