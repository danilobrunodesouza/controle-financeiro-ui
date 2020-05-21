import { NgModule } from "@angular/core";
import { RelatoriosComponent } from './relatorios.component';
import { CommonModule } from '@angular/common';
import { GraficoDonutModule } from './grafico-donut/grafico-donut.module';
import { GraficoDeLinhaModule } from './grafico-de-linha/grafico-de-linha.module';
import { GraficoDeBarraModule } from './grafico-de-barra/grafico-de-barra.module';


@NgModule({
declarations : [ RelatoriosComponent,],
exports : [ RelatoriosComponent ],
imports : [ 
    CommonModule,
    GraficoDeLinhaModule,
    GraficoDonutModule,
    GraficoDeBarraModule
 ],
})
export class RelatoriosModule {}