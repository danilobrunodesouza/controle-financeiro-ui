import { Component, OnInit } from '@angular/core';
import { MesesService } from 'src/app/shared/services/meses.service';
import { CoresEmHexaService } from 'src/app/shared/services/cores-em-hexa.service';
import { InformacoesDoGraficoDeLinha } from './informacoes-do-grafico-de-linha.interface';

@Component({
  selector: 'app-grafico-de-linha',
  templateUrl: './grafico-de-linha.component.html',
  styleUrls: ['./grafico-de-linha.component.css']
})
export class GraficoDeLinhaComponent implements OnInit {
  
  informacoesDoGraficoDeLinha: InformacoesDoGraficoDeLinha;

  constructor(private mesesService : MesesService,
    private coresEmHexaService : CoresEmHexaService) { }

  ngOnInit(): void {
    const cores = this.coresEmHexaService.listaTudo();
    this.informacoesDoGraficoDeLinha = {
      labels: this.mesesService.listaTodos(),
      datasets: [
          {
              label: 'Internet',
              data: [65, 59, 80, 81, 56, 55, 40, 34, 54, 67, 23, 65],
              fill: false,
              borderColor: cores[0]
          },
          {
              label: 'Luz',
              data: [28, 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 34],
              fill: false,
              borderColor: cores[1]
          
          },
          {
              label: 'Água',
              data: [90, 81, 56, 55, 40, 34, 28, 48, 40, 19, 86, 27],
              fill: false,
              borderColor: cores[2]
          }
      ]
  }
  }

}
