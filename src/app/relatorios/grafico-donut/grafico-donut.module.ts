import { NgModule } from '@angular/core';
import { GraficoDonutComponent } from './grafico-donut.component';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/chart';

@NgModule({
    declarations : [ GraficoDonutComponent ],
    exports : [ GraficoDonutComponent ],
    imports : [ 
        CommonModule,
        ChartModule
     ],
})
export class GraficoDonutModule {}