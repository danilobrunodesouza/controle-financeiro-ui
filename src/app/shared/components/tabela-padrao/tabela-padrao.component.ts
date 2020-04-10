import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/categoria/categoria.interface';


@Component({
  selector: 'cf-tabela-padrao',
  templateUrl: './tabela-padrao.component.html',
  styleUrls: ['./tabela-padrao.component.css']
})
export class TabelaPadraoComponent implements OnInit {

  @Input() objetos : any[] = [];
  @Input() headers : string[] = [];
  @Input() titulo : string = '';
  @Input() urlDoObjeto : string = '';

  mostraDialogoDeRemocao : boolean = false;

  @Output() eventoDeRemocaoDeItem : EventEmitter<any> = new EventEmitter();
  
  cols : any[] = [];
  itemParaSerRemovido : any;

  constructor() { }

  ngOnInit(): void {
    if(!!this.objetos.length){
      this.pegaPropriedades(this.objetos[0]);
    }
  }
  
  pegaPropriedades(objeto) {
    for (let i in objeto) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (objeto.hasOwnProperty(i)) {
        this.cols.push({field : i, header : i});
      }
    }
  }

  dialogoDeRemocao($event, objeto){
    this.mostraDialogoDeRemocao = true;
    this.itemParaSerRemovido = objeto;
    console.log("acao para remover o item" + objeto.id);
  }

  confirmaAcaoDeRemocaoDoItem(){
    this.eventoDeRemocaoDeItem.emit(this.itemParaSerRemovido);
  }
}
