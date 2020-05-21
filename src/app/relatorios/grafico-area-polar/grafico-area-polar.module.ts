import { NgModule } from "@angular/core";
import { GraficoAreaPolarComponent } from './grafico-area-polar.component';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/chart';

@NgModule({
    declarations : [ GraficoAreaPolarComponent ],
    exports : [ GraficoAreaPolarComponent ],
    imports : [ 
        CommonModule,
        ChartModule
     ],
})
export class GraficoAreaPolarModule {}