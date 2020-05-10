import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cf-lista-card-padrao',
  templateUrl: './lista-card-padrao.component.html',
  styleUrls: ['./lista-card-padrao.component.css']
})
export class ListaCardPadraoComponent implements OnInit {

  @Input() objetos : any []
  @Input() corUsada : string
  
  constructor() { }

  ngOnInit(): void {
  }

}
