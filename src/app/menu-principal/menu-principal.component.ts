import { Component, OnInit } from '@angular/core';
import { MenuPrincipalService } from './menu-principal.service';
import { MenuPrincipal } from './menu-principal.interface';

@Component({
  selector: 'cf-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  menus: MenuPrincipal[];

  constructor(private menuPrincipalService : MenuPrincipalService) { }

  ngOnInit(): void {
    this.menuPrincipalService.listaTudo().subscribe(menus => this.menus = menus);
  }

}
