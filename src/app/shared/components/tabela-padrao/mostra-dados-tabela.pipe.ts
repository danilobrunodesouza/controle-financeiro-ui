import { Pipe, PipeTransform, Output, ɵpublishDefaultGlobalUtils } from '@angular/core';
import {Tabelavel} from '../tabela-padrao/tabelavel.interface'

@Pipe({ name : 'mostraDadosNaTabela' }) 
export class MostraDadosTabela implements PipeTransform {
    
    transform(campo: any) {
        if(campo instanceof Object){
            if(campo instanceof Date){
                return campo.toLocaleString('pt-br');
            } else {
                return campo.mostraNaTabela();
            }
            
        } else {
            return campo;
        }
    }

}