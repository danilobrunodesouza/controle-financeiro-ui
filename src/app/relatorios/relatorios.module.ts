import { NgModule } from "@angular/core";
import { RelatoriosComponent } from './relatorios.component';
import { CommonModule } from '@angular/common';
import { GraficoDonutModule } from './grafico-donut/grafico-donut.module';
import { GraficoDeLinhaModule } from './grafico-de-linha/grafico-de-linha.module';
import { GraficoDeBarraModule } from './grafico-de-barra/grafico-de-barra.module';
import { GraficoAreaPolarModule } from './grafico-area-polar/grafico-area-polar.module';
import { GraficoPizzaModule } from './grafico-pizza/grafico-pizza.module';


@NgModule({
declarations : [ RelatoriosComponent ],
exports : [ RelatoriosComponent ],
imports : [ 
    CommonModule,
    GraficoDeLinhaModule,
    GraficoDonutModule,
    GraficoAreaPolarModule,
    GraficoDeBarraModule,
    GraficoPizzaModule
 ],
})
export class RelatoriosModule {}