export class Jogador {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.posicaoAtual = 1;
        this.perdeAVez = false;
    }

    mover(quantidadeCasas) {
        this.posicaoAtual += quantidadeCasas;
        if (this.posicaoAtual > 41) {
            this.posicaoAtual = 41;//condição de Vitória
        }
    }
}