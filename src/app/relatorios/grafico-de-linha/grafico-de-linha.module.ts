import { NgModule } from "@angular/core";
import { GraficoDeLinhaComponent } from './grafico-de-linha.component';
import { CommonModule } from '@angular/common';

import {ChartModule} from 'primeng/chart';


@NgModule({
    declarations : [ GraficoDeLinhaComponent ],
    exports : [ GraficoDeLinhaComponent ],
    imports : [ 
        CommonModule,
        ChartModule
     ]
})
export class GraficoDeLinhaModule {}