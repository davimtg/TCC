import { Casa } from './Casa.js';

export class Tabuleiro {
    constructor() {
        this.casas = this.gerarCasas();
    }

    gerarCasas() {
        const arrayCasas = [];
        for (let i = 1; i <= 41; i++) {
            // Lógica preliminar: define os tipos de casa baseado nas regras do SBCB[cite: 2]
            let tipo = 'pergunta';
            
            // Exemplo de mapeamento de casas especiais[cite: 2]
            if ([4, 20, 24, 31, 34, 40].includes(i)) tipo = 'penalidade'; //[cite: 2]
            if ([10, 16].includes(i)) tipo = 'recompensa'; //[cite: 2]
            if (i === 1 || i === 41) tipo = 'neutra'; 

            arrayCasas.push(new Casa(i, tipo));
        }
        return arrayCasas;
    }

    obterCasa(posicao) {
        // Ajusta o índice (posicao 1 = index 0)
        return this.casas[posicao - 1]; //[cite: 2]
    }
}