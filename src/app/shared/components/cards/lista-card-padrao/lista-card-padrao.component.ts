import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cf-lista-card-padrao',
  templateUrl: './lista-card-padrao.component.html',
  styleUrls: ['./lista-card-padrao.component.css']
})
export class ListaCardPadraoComponent implements OnInit {

  @Input() objetos : any []
  @Input() corUsada : string;
  
  @Output() clicouNoObjeto = new EventEmitter<any>();
   
  constructor() { }

  ngOnInit(): void {
  }


  pegaObjetoClicado(objeto : any){
    this.clicouNoObjeto.emit(objeto);
  }

}
