import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListaComponent } from './categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormularioComponent } from './categoria/categoria-formulario/categoria-formulario.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroListaComponent } from './registro/registro-lista/registro-lista.component';
import { GraficoDonutComponent } from './relatorios/grafico-donut/grafico-donut.component';
import { RegistroFormularioComponent } from './registro/registro-formulario/registro-formulario.component';
import { FormularioRapidoComponent } from './registro/formulario-rapido/formulario-rapido.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaListaComponent } from './subcategoria/subcategoria-lista/subcategoria-lista.component';
import { SubcategoriaFormularioComponent } from './subcategoria/subcategoria-formulario/subcategoria-formulario.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { GraficoDeLinhaComponent } from './relatorios/grafico-de-linha/grafico-de-linha.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { GraficoDeBarraComponent } from './relatorios/grafico-de-barra/grafico-de-barra.component';


const routes: Routes = [
  {path : '', component : MenuPrincipalComponent},

  {path : 'categoria', component : CategoriaComponent},
  {path : 'categoria/lista', component : CategoriaListaComponent},
  {path : 'categoria/formulario', component : CategoriaFormularioComponent},
  {path : 'categoria/formulario/:idCategoria', component : CategoriaFormularioComponent},
  
  {path : 'subcategoria', component : SubcategoriaComponent},
  {path : 'subcategoria/lista', component : SubcategoriaListaComponent},
  {path : 'subcategoria/formulario', component : SubcategoriaFormularioComponent},
  {path : 'subcategoria/formulario/:idSubcategoria', component : SubcategoriaFormularioComponent},
  
  {path : 'registro', component : RegistroComponent},
  {path : 'registro/lista', component : RegistroListaComponent},
  {path : 'registro/formulario', component : RegistroFormularioComponent},
  {path : 'registro/formulario/:idRegistro', component : RegistroFormularioComponent},
  {path : 'registro/formulario-rapido', component : FormularioRapidoComponent},
 
  {path : 'relatorio', component : RelatoriosComponent},
  {path : 'relatorio/donut', component : GraficoDonutComponent},
  {path : 'relatorio/linha', component : GraficoDeLinhaComponent},
  {path : 'relatorio/barra', component : GraficoDeBarraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
