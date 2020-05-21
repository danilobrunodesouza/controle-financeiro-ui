import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro/registro.service';
import { DadosGraficoDonut } from './grafico-donut/dados-grafico-donut.interface';
import { DadosGraficoDeLinha } from './grafico-de-linha/dados-grafico-de-linha.interface';
import { MesesService } from '../shared/services/meses.service';
import { DadosGraficoDeBarra } from './grafico-de-barra/dados-grafico-de-barra.interface';
import { DadosGraficoAreaPolar } from './grafico-area-polar/dados-grafico-area-polar.interface';
import { DadosGraficoPizza } from './grafico-pizza/dados-grafico-pizza.interface';

@Component({
  selector: 'cf-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  dadosGraficoAreaPolar: DadosGraficoAreaPolar[] = [];
  dadosGraficoDonut: DadosGraficoDonut[] = [];
  dadosGraficoPizza: DadosGraficoPizza[] = [];

  dadosGraficoDeLinha: DadosGraficoDeLinha;
  dadosGraficoDeBarra: DadosGraficoDeBarra;

  constructor(private registroService: RegistroService,
    private mesesService : MesesService,) { }

  ngOnInit(): void {
    this._montaGraficoDonut();
    this._montaGraficoPizza();
    this._montaGraficoDeLinha();
    this._montaGraficoDeBarra();
    this._montaGraficoAreaPolar();
  }
  _montaGraficoPizza() {
    this.registroService.pegaTodosRegistros()
      .subscribe(registros => {
        registros.forEach(r => {
          this.dadosGraficoPizza.push({ titulo: r.categoria.titulo, valor: r.valor });
        });
      });    
    
  }
  _montaGraficoAreaPolar() {
    this.registroService.pegaTodosRegistros()
      .subscribe(registros => {
        registros.forEach(r => {
          this.dadosGraficoAreaPolar.push({ titulo: r.categoria.titulo, valor: r.valor });
        });
      });    
  }

  _montaGraficoDeBarra() {
    this.dadosGraficoDeBarra = { 
      periodo : this.mesesService.listaTodos(),
      barras : []
     }

    this.registroService.pegaTodasEntradasESaidasDoAno()
      .subscribe(registrosDTO => {
        registrosDTO.forEach( r => {
          this.dadosGraficoDeBarra.barras.push({ titulo : r.titulo, valores : r.valores});
        });

      });
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
