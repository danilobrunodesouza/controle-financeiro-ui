import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cf-card-padrao',
  templateUrl: './card-padrao.component.html',
  styleUrls: ['./card-padrao.component.css']
})
export class CardPadraoComponent implements OnInit {

  @Input() objeto : any;
  @Input() index : number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.objeto);
  }

}
