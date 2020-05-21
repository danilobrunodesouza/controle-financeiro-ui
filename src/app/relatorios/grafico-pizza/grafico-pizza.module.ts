import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { GraficoPizzaComponent } from './grafico-pizza.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
    declarations : [ GraficoPizzaComponent ],
    exports : [ GraficoPizzaComponent ],
    imports : [ 
        CommonModule,
        ChartModule
     ],
})
export class GraficoPizzaModule {}