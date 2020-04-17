import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistroFormularioComponent } from './registro-formulario.component';
import { InputsModule } from 'src/app/shared/components/inputs/inputs.module';
import {ButtonModule} from 'primeng/button';


@NgModule({
    declarations : [ RegistroFormularioComponent ],
    exports : [ RegistroFormularioComponent ],
    imports : [ 
        CommonModule,
        FormsModule,
        ButtonModule,
        ReactiveFormsModule,
        InputsModule,
     ],
})
export class RegistroFormularioModule {}