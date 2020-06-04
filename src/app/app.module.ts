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
import { NgwWowModule } from 'ngx-wow';
import { ListaCardPadraoModule } from './shared/components/cards/lista-card-padrao/lista-card-padrao.module';
import { TipoContaComponent } from './tipo-conta/tipo-conta.component';
import { TipoContaFormularioComponent } from './tipo-conta/tipo-conta-formulario/tipo-conta-formulario.component';
import { TipoContaListaComponent } from './tipo-conta/tipo-conta-lista/tipo-conta-lista.component';
import { TipoContaModule } from './tipo-conta/tipo-conta.module';


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
    NgwWowModule,
    TipoContaModule,
    ListaCardPadraoModule,
    SubcategoriaModule,
    MenuPrincipalModule,
    DirectivesModule,
    RegistroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
