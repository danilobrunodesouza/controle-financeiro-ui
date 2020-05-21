import { Component, OnInit, Input } from '@angular/core';
import { MesesService } from 'src/app/shared/services/meses.service';
import { CoresEmHexaService } from 'src/app/shared/services/cores-em-hexa.service';
import { DadosGraficoDeLinha } from './dados-grafico-de-linha.interface';
import { LinhaGrafico } from './linha-grafico.interface';

@Component({
  selector: 'cf-grafico-de-linha',
  templateUrl: './grafico-de-linha.component.html',
  styleUrls: ['./grafico-de-linha.component.css']
})
export class GraficoDeLinhaComponent implements OnInit {

  informacoesDoGraficoDeLinha: any;

  @Input() dadosGraficoDeLinha: DadosGraficoDeLinha;

  constructor(private coresEmHexaService: CoresEmHexaService) { }

  ngOnInit(): void {
    this.informacoesDoGraficoDeLinha = {
      labels: this.dadosGraficoDeLinha.periodo,
      datasets: []
    }

    const cores = this.coresEmHexaService.listaTudo();

    for (let indice = 0; indice < this.dadosGraficoDeLinha.linhas.length; indice++) {
      const linha = this.dadosGraficoDeLinha.linhas[indice];
      const indiceDaCor = indice % cores.length;
      const dataset = this._pegaDataset(linha, cores[indiceDaCor]);

      this.informacoesDoGraficoDeLinha.datasets.push(dataset);
    }

  }

  _pegaDataset(linha: LinhaGrafico, cor: string) {
    return {
      label: linha.titulo,
      data: linha.valores,
      fill: false,
      borderColor: cor
    }
  }

}
