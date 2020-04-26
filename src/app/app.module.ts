import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';
import { CategoriaModule } from './categoria/categoria.module';
import { RegistroModule } from './registro/registro.module';
import { RelatoriosModule } from './relatorios/relatorios.module';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';
import { DirectivesModule } from './shared/directives/directives.module';

import { MenuPrincipalModule } from './menu-principal/menu-principal.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RelatoriosModule,
    CategoriaModule,
    SubcategoriaModule,
    MenuPrincipalModule,
    DirectivesModule,
    RegistroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
