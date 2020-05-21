import { Component, OnInit, Input } from '@angular/core';
import { DadosGraficoDeBarra } from './dados-grafico-de-barra.interface';
import { CoresEmHexaService } from 'src/app/shared/services/cores-em-hexa.service';
import { BarraGrafico } from './barra-grafico.interface';

@Component({
  selector: 'cf-grafico-de-barra',
  templateUrl: './grafico-de-barra.component.html',
  styleUrls: ['./grafico-de-barra.component.css']
})
export class GraficoDeBarraComponent implements OnInit {

  informacoesDoGraficoDeBarra: any;

  @Input() dadosGraficoDeBarra : DadosGraficoDeBarra;

  constructor(private coresEmHexaService : CoresEmHexaService) {}
  
  
  ngOnInit(): void {

    this.informacoesDoGraficoDeBarra = {
        labels: this.dadosGraficoDeBarra.periodo,
        datasets: []
      }
      const cores = this.coresEmHexaService.listaTudo();
      for( let i = 0; i < this.dadosGraficoDeBarra.barras.length; i++){
        const barra = this.dadosGraficoDeBarra.barras[i];
        const indiceDaCor = i % cores.length;
        const cor = cores[indiceDaCor];

        this.informacoesDoGraficoDeBarra.datasets.push(this._pegaDataset(barra, cor));
      }


    }
    
    _pegaDataset(barra : BarraGrafico, cor : string) : any {
      return {
          label: barra.titulo,
          backgroundColor: cor,
          //borderColor: '#1E88E5',
          data: barra.valores
      }

  }

}
