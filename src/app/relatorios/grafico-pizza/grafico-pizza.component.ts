import { Component, OnInit, Input } from '@angular/core';
import { CoresEmHexaService } from 'src/app/shared/services/cores-em-hexa.service';
import { DadosGraficoPizza } from './dados-grafico-pizza.interface';

@Component({
  selector: 'cf-grafico-pizza',
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.css']
})
export class GraficoPizzaComponent implements OnInit {


  dadosDoGrafico: any;
  @Input() dadosGraficoPizza : DadosGraficoPizza[] = [];
  constructor(private coresEmHexaService : CoresEmHexaService) {}
  
  ngOnInit(): void {
    this.dadosDoGrafico = {
        labels: this.dadosGraficoPizza.map(d => d.titulo),
        datasets: [
            {
                data: this.dadosGraficoPizza.map(d => d.valor),
                backgroundColor: this.coresEmHexaService.listaTudo(),
            }]    
        };
  }

}
