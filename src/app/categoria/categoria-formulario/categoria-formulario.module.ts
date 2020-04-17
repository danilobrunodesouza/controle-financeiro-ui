import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CategoriaFormularioComponent } from './categoria-formulario.component';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputsModule } from 'src/app/shared/components/inputs/inputs.module';
import {ButtonModule} from 'primeng/button';


@NgModule({
    declarations : [ CategoriaFormularioComponent ],
    exports : [ CategoriaFormularioComponent ],
    imports : [ 
        CommonModule,
        FormsModule,
        ButtonModule,
        ReactiveFormsModule,
        InputsModule,
     ]
    
})
export class CategoriaFormularioModule {}