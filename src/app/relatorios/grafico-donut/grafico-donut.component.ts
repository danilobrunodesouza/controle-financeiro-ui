import { Component, OnInit, Input } from '@angular/core';
import { CoresEmHexaService } from 'src/app/shared/services/cores-em-hexa.service';
import { DadosGraficoDonut } from './dados-grafico-donut.interface';

@Component({
  selector: 'cf-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styleUrls: ['./grafico-donut.component.css']
})
export class GraficoDonutComponent implements OnInit {

  dadosDoGrafico: any;

  @Input() dadosGraficoDonut : DadosGraficoDonut[] = [];

  constructor(private coresEmHexaService : CoresEmHexaService) {}

  ngOnInit(): void { 
    this._montaGrafico();
  }

  _montaGrafico() {
    this.dadosDoGrafico = {
      labels: this.dadosGraficoDonut.map(d => d.titulo),
      datasets: [
        {
          data: this.dadosGraficoDonut.map(d => d.valor),
          backgroundColor: this.coresEmHexaService.listaTudo(),
        }]
    };
  }
}
