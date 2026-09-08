export class Casa {
    constructor(numero, tipoCasa) {
        this.numero = numero; 
        this.tipoCasa = tipoCasa;
    }

    verificarAcao(jogador) {
        return {
            tipo: this.tipoCasa,
            mensagem: `O jogador ${jogador.nome} caiu na casa ${this.numero}`
        };
    }
}