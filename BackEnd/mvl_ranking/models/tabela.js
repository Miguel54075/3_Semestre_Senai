class Tabela {
    constructor(id, pontuacao, jogador) {
        if(!pontuacao || !jogador){
            throw new Error("Os campos pontuacao e jogador são obrigatórios")
        }
        this.id = id
        this.pontuacao = pontuacao
        this.jogador = jogador
        this.pontos = 0
    }
    principal(){
        return `${this.jogador} - ${this.pontuacao}`
    }
    ganhoPontuacao(pontos){
        this.pontos += pontos
    }
    ChamarPontucao(pontos){
        this.pontuacao += pontos
    }
}

export default Tabela