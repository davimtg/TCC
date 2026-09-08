export class Dado {
    constructor(lados = 6) {
        this.lados = lados; //
    }

    rolar() {
        return Math.floor(Math.random() * this.lados) + 1;
    }
}