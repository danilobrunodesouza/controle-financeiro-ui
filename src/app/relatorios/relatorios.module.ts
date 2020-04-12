import { NgModule } from "@angular/core";
import { RelatoriosComponent } from './relatorios.component';
import { CommonModule } from '@angular/common';
import { GraficoDonutModule } from './grafico-donut/grafico-donut.module';


@NgModule({
declarations : [ RelatoriosComponent],
exports : [ RelatoriosComponent ],
imports : [ 
    CommonModule,
    GraficoDonutModule,
 ],
})
export class RelatoriosModule {}