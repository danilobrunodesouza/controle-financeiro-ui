import { Component, OnInit, Input } from '@angular/core';
import { Registro } from 'src/app/registro/registro.interface';
import { RegistroService } from 'src/app/registro/registro.service';
import { Observable } from 'rxjs';
import { CoresEmHexaService } from 'src/app/shared/services/cores-em-hexa.service';
import { DadosGraficoDonut } from './dados-grafico-donut.interface';

@Component({
  selector: 'cf-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styleUrls: ['./grafico-donut.component.css']
})
export class GraficoDonutComponent implements OnInit {

  registros: Registro[];
  dadosDoGrafico: any;

  @Input() dadosGraficoDonut : DadosGraficoDonut[] = [];

  constructor(private coresEmHexaService : CoresEmHexaService) {}

  ngOnInit(): void { 
    this._montaGrafico();
  }

  _montaGrafico() {
    const titulos = this.dadosGraficoDonut.map(d => d.titulo);
    const valores = this.dadosGraficoDonut.map(d => d.valor);

    this.dadosDoGrafico = {
      labels: [...titulos],
      datasets: [
        {
          data: [...valores],
          backgroundColor: this.coresEmHexaService.listaTudo(),
        }]
    };
  }
}
