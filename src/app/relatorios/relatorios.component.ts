import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro/registro.service';
import { DadosGraficoDonut } from './grafico-donut/dados-grafico-donut.interface';
import { DadosGraficoDeLinha } from './grafico-de-linha/dados-grafico-de-linha.interface';
import { MesesService } from '../shared/services/meses.service';

@Component({
  selector: 'cf-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {


  dadosGraficoDonut: DadosGraficoDonut[] = []
  dadosGraficoDeLinha: DadosGraficoDeLinha

  constructor(private registroService: RegistroService,
    private mesesService : MesesService,) { }

  ngOnInit(): void {
    this._montaGraficoDonut();
    this._montaGraficoDeLinha();
  }
  _montaGraficoDeLinha() {
    this.dadosGraficoDeLinha = { 
      periodo : this.mesesService.listaTodos(),
      linhas : []
     }
    this.registroService.pegaTodosLancamentosDoAno()
      .subscribe(registrosDTO => {
        registrosDTO.forEach( r => {
          this.dadosGraficoDeLinha.linhas.push({ titulo : r.titulo, valores : r.valores});
        });
    });

  }
  _montaGraficoDonut() {
    this.registroService.pegaTodosRegistros()
      .subscribe(registros => {
        registros.forEach(r => {
          this.dadosGraficoDonut.push({ titulo: r.categoria.titulo, valor: r.valor });
        });
      });
  }

}
