import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjetoCard } from './objeto-card.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'cf-card-padrao',
  templateUrl: './card-padrao.component.html',
  styleUrls: ['./card-padrao.component.css']
})
export class CardPadraoComponent implements OnInit {

  @Input() objeto: ObjetoCard;
  @Input() index: number;

  
  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(this.objeto);
  }

  clickNoCartao() {
    console.log(this.objeto.url);
    
      this.router.navigateByUrl(this.objeto.url);
  }

}
