import { NgModule } from '@angular/core';
import { InputTextPadraoComponent } from './input-text-padrao/input-text-padrao.component';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations : [ InputTextPadraoComponent ],
    exports : [ InputTextPadraoComponent ],
    imports : [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
     ]
})
export class InputsModule{}