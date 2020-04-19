import { NgModule } from '@angular/core';
import { InputTextPadraoComponent } from './input-text-padrao/input-text-padrao.component';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCalendarPadraoComponent } from './input-calendar-padrao/input-calendar-padrao.component';
import {CalendarModule} from 'primeng/calendar';
import { InputDropdownPadraoComponent } from './input-dropdown-padrao/input-dropdown-padrao.component';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
    declarations : [ InputTextPadraoComponent, InputCalendarPadraoComponent, InputDropdownPadraoComponent ],
    exports : [ InputTextPadraoComponent, InputCalendarPadraoComponent, InputDropdownPadraoComponent ],
    imports : [ 
        CommonModule,
        FormsModule,
        DropdownModule,
        ReactiveFormsModule,
        CalendarModule,
        InputTextModule,
     ]
})
export class InputsModule{}