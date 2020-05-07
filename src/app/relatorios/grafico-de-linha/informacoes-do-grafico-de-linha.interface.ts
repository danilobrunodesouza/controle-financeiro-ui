import { DadosDoGraficoDeLinha } from './dados-do-grafico-de-linha.interface';

export interface InformacoesDoGraficoDeLinha {
    labels: string [],
    datasets: DadosDoGraficoDeLinha[],
}