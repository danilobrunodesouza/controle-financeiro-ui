import { NgModule } from "@angular/core";
import { TipoContaFormularioComponent } from './tipo-conta-formulario.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from 'src/app/shared/components/inputs/inputs.module';
import {ButtonModule} from 'primeng/button';

@NgModule({
    declarations : [  TipoContaFormularioComponent ],
    exports : [  TipoContaFormularioComponent ],
    imports : [       
        CommonModule,
        FormsModule,
        ButtonModule,
        ReactiveFormsModule,
        InputsModule,
    ],
})
export class TipoContaFormularioModule {}