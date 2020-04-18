import { NgModule } from '@angular/core';
import { InputTextPadraoComponent } from './input-text-padrao/input-text-padrao.component';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCalendarPadraoComponent } from './input-calendar-padrao/input-calendar-padrao.component';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
    declarations : [ InputTextPadraoComponent, InputCalendarPadraoComponent ],
    exports : [ InputTextPadraoComponent, InputCalendarPadraoComponent ],
    imports : [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CalendarModule,
        InputTextModule,
     ]
})
export class InputsModule{}