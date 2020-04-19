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


const routes: Routes = [
  {path : 'categoria', component : CategoriaComponent},
  {path : 'categoria/lista', component : CategoriaListaComponent},
  {path : 'categoria/formulario', component : CategoriaFormularioComponent},
  {path : 'categoria/formulario/:idCategoria', component : CategoriaFormularioComponent},
  
  {path : 'registro', component : RegistroComponent},
  {path : 'registro/lista', component : RegistroListaComponent},
  {path : 'registro/formulario', component : RegistroFormularioComponent},
  {path : 'registro/formulario-rapido', component : FormularioRapidoComponent},
  {path : 'registro/formulario/:idRegistro', component : RegistroFormularioComponent},
 
  {path : 'relatorio/donut', component : GraficoDonutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
