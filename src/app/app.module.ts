import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';
import { CategoriaModule } from './categoria/categoria.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CategoriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
