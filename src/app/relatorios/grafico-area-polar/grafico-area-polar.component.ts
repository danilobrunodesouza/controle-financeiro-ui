import { Component, OnInit, Input } from '@angular/core';
import { DadosGraficoAreaPolar } from './dados-grafico-area-polar.interface';
import { CoresEmHexaService } from 'src/app/shared/services/cores-em-hexa.service';

@Component({
  selector: 'cf-grafico-area-polar',
  templateUrl: './grafico-area-polar.component.html',
  styleUrls: ['./grafico-area-polar.component.css']
})
export class GraficoAreaPolarComponent implements OnInit {

  @Input() dadosGraficoAreaPolar: DadosGraficoAreaPolar[] = [];
  dadosDoGrafico: any;

  constructor(private coresEmHexaService: CoresEmHexaService) { }
  ngOnInit(): void {
    this._montaGrafico();
  }
  
  _montaGrafico(){
    this.dadosDoGrafico = {
      labels: this.dadosGraficoAreaPolar.map(d => d.titulo),
      datasets: [{
        data: this.dadosGraficoAreaPolar.map(d => d.valor),
        backgroundColor: this.coresEmHexaService.listaTudo(),
        label: 'My dataset'
      }],
    }

  }
}
