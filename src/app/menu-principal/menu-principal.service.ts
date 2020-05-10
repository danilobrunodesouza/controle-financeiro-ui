import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuPrincipal } from './menu-principal.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuPrincipalService {

  constructor() { }

  listaTudo() : Observable<MenuPrincipal[]> {
    return of([
      { id: 1, icone: 'fa fa-barcode', titulo: 'Registrar Gasto', descricao : 'Registre seus Gastos', url : '/registro/formulario-rapido' },
      { id: 2, icone: 'fa fa-money', titulo: 'Registrar Receita', descricao : 'Registre sua Receita', url : '/registro/formulario-rapido' },
      { id: 3, icone: 'fa fa-pie-chart', titulo: 'Relatórios', descricao :'Veja seus Relatórios', url : '/registro/formulario-rapido' },
      { id: 4, icone: 'fa fa-magic', titulo: 'Registro Automático', descricao :'Registros são incluídos automaticamente', url : '/registro/formulario-rapido' },
      { id: 5, icone: 'fa fa-floppy-o', titulo: 'Salvar Registro', descricao :'Salve os registros mais frequentes', url : '/registro/formulario-rapido' },
      { id: 6, icone: 'fa fa-calendar-check-o', titulo: 'Agendar Parcelas', descricao :'Agende automaticamente as parcelas', url : '/registro/formulario-rapido' },
    ]);
  }

}
