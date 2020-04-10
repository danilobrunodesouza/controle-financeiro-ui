import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListaComponent } from './categoria/categoria-lista/categoria-lista.component';


const routes: Routes = [
  {path : 'categoria', component : CategoriaComponent},
  {path : 'categoria/lista', component : CategoriaListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
