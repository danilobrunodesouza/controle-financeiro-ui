import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/categoria/categoria.model';
import { Registro } from 'src/app/registro/registro.interface';

@Component({
  selector: 'app-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styleUrls: ['./grafico-donut.component.css']
})
export class GraficoDonutComponent implements OnInit {
  
  data: any;
  
  constructor() {
    const registros = this._pegaRegistros();

    const titulos = registros.map(r => r.categoria.titulo);
    const valores = registros.map(r => r.valor);

      this.data = {
          labels: [...titulos],
          datasets: [
              {
                  data: [...valores],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
              }]    
          };
  }
  ngOnInit(): void {
    
  }

 
  _pegaRegistros(): Registro[] {
    return [
      {
        id: 1, data: new Date(), categoria: new CategoriaModel(1, 'fa fa-home', 'Moradia'),
        descricao: "descricao", valor: 100
      },
      {
        id: 2, data: new Date(), categoria : new CategoriaModel(2, 'fa fa-graduation-cap', 'Educação'),
        descricao: "descricao2", valor: 50
      },
      {
        id: 3, data: new Date(), categoria : new CategoriaModel(2, 'fa fa-car', 'Carro'),
        descricao: "descricao3", valor: 25
      },
    ];
}
}
