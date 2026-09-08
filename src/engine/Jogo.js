import { Tabuleiro } from './Tabuleiro.js';
import { Dado } from './Dado.js';

export class Jogo {
    constructor(listaJogadores) {
        this.jogadores = listaJogadores;
        this.tabuleiro = new Tabuleiro();
        this.dado = new Dado();
        this.turnoAtual = 0;
        this.status = 'aguardando_inicio';
    }

    iniciarJogo() {
        this.status = 'em_andamento';
        return this.jogadores[this.turnoAtual];
    }

    passarTurno() {
        this.turnoAtual = (this.turnoAtual + 1) % this.jogadores.length;

        if (this.jogadores[this.turnoAtual].perdeAVez) {
            this.jogadores[this.turnoAtual].perdeAVez = false; // remove  penalidade
            this.passarTurno();
        }
    }

    verificarVencedor() {
        const jogadorAtivo = this.jogadores[this.turnoAtual];
        return jogadorAtivo.posicaoAtual >= 41; //ondição de Vitória[cite: 2]
    }
}