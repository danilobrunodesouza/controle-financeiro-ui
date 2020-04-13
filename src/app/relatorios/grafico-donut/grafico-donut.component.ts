import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/registro/registro.interface';
import { RegistroService } from 'src/app/registro/registro.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cf-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styleUrls: ['./grafico-donut.component.css']
})
export class GraficoDonutComponent implements OnInit {

  registros: Registro[];
  data: any;

  constructor(private registroService: RegistroService) {
    this._pegaRegistros();
  }

  ngOnInit(): void { }

  _pegaRegistros(): void {
    this.registroService.pegaTodosRegistros().subscribe(registros => {
      this.registros = registros;

      const titulos = registros.map(r => r.categoria.titulo);
      const valores = registros.map(r => r.valor);

      this.data = {
        labels: [...titulos],
        datasets: [
          {
            data: [...valores],
            backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#9900FF",
              "#36A2EB",
              "#E7E9ED",
              "#00A86B",
            ],
          }]
      };

    }
    );
  }
}
