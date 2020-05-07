import { NgModule } from "@angular/core";
import { RelatoriosComponent } from './relatorios.component';
import { CommonModule } from '@angular/common';
import { GraficoDonutModule } from './grafico-donut/grafico-donut.module';
import { GraficoDeLinhaModule } from './grafico-de-linha/grafico-de-linha.module';


@NgModule({
declarations : [ RelatoriosComponent,],
exports : [ RelatoriosComponent ],
imports : [ 
    CommonModule,
    GraficoDeLinhaModule,
    GraficoDonutModule,
 ],
})
export class RelatoriosModule {}