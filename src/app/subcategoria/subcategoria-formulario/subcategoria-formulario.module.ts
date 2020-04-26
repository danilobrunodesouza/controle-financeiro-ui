import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubcategoriaFormularioComponent } from './subcategoria-formulario.component';
import { ButtonModule } from 'primeng/button';
import { InputsModule } from 'src/app/shared/components/inputs/inputs.module';

@NgModule({
    declarations : [ SubcategoriaFormularioComponent ],
    exports : [ SubcategoriaFormularioComponent ],
    imports : [ 
        CommonModule,
        FormsModule,
        ButtonModule,
        ReactiveFormsModule,
        InputsModule,
     ]
})
export class SubcategoriaFormularioModule {}