import { NgModule } from "@angular/core";
import { GraficoDeBarraComponent } from './grafico-de-barra.component';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/chart';

@NgModule({
    declarations : [ GraficoDeBarraComponent ],
    exports : [ GraficoDeBarraComponent ],
    imports : [ 
        CommonModule,
        ChartModule
     ],
})
export class GraficoDeBarraModule {}