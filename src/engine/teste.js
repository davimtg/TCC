import { Jogo } from './Jogo.js';
import { Jogador } from './Jogador.js';

// 1. Criar os jogadores
const j1 = new Jogador(1, "Davi");
const j2 = new Jogador(2, "Aluno Teste");

// 2. Instanciar e iniciar o jogo
const partida = new Jogo([j1, j2]);
partida.iniciarJogo();

console.log("=== INÍCIO DA PARTIDA ===");

// 3. Simular 5 rodadas
for (let i = 1; i <= 5; i++) {
    const jogadorAtivo = partida.jogadores[partida.turnoAtual];
    console.log(`\n--- Rodada ${i} ---`);
    console.log(`É a vez de: ${jogadorAtivo.nome} (Posição atual: ${jogadorAtivo.posicaoAtual})`);
    
    // Rolar o dado e mover
    const valorDado = partida.dado.rolar();
    console.log(`🎲 Dado rolou: ${valorDado}`);
    jogadorAtivo.mover(valorDado);
    
    // Verificar a casa
    const casaAlvo = partida.tabuleiro.obterCasa(jogadorAtivo.posicaoAtual);
    console.log(`📍 Caiu na Casa ${casaAlvo.numero} (${casaAlvo.tipoCasa})`);
    
    // Aplicar a lógica da Pergunta
    if (casaAlvo.tipoCasa === 'pergunta') {
        // Math.random() > 0.5 simula um acerto (true ou false)
        const acertou = Math.random() > 0.5; 

        if (acertou) {
            console.log(`✅ Respondeu CERTO! Avança 1 casa de bônus.`);
            jogadorAtivo.mover(1);
        } else {
            console.log(`❌ Respondeu ERRADO! Recua 2 casas.`);
            jogadorAtivo.mover(-2);
        }
        console.log(`🏁 Posição final após a pergunta: Casa ${jogadorAtivo.posicaoAtual}`);
    }
    
    // Passar o turno
    partida.passarTurno();
}