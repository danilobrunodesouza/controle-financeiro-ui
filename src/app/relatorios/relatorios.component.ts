import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro/registro.service';
import { DadosGraficoDonut } from './grafico-donut/dados-grafico-donut.interface';

@Component({
  selector: 'cf-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {


  dadosGraficoDonut : DadosGraficoDonut[] = []

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
    this.registroService.pegaTodosRegistros()
      .subscribe(registros => {
        registros.forEach(r => {
          this.dadosGraficoDonut.push({ titulo : r.categoria.titulo, valor : r.valor });
        });
    });
  }

}
