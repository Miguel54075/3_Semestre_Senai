import Tabela from "../models/tabela.js";

let listaTabela = [
    new Tabela(1, 100, "Jogador1"),
    new Tabela(2, 150, "Jogador2"),
    new Tabela(3, 200, "Jogador3")
]

const TabelaController = {
    listarTabela: (req, res) => {
        res.render('tabela', { tabela: listaTabela });
    },
    adicionar: (req, res) => {
        const { id, pontuacao, jogador } = req.body;
        try{
            const novaTabela = new Tabela(
                listaTabela.length + 1,
                Number(pontuacao),
                jogador
            );
            listaTabela.push(novaTabela);
        }catch(e)
        {
            res.status(400).render('tabela.ejs', { erro: "Erro ao adicionar tabela" });
            };
        },
        atualizarPontuacao: (req, res) => {
            const { id } = parseInt(req.params.id);
            const { pontos } = req.body;
            const tabela = listaTabela.find(t => t.id === Number(id));
            if(tabela){
                tabela.ganhoPontuacao(Number(pontos));
                res.redirect('/tabela');
            }else{
                res.status(404).render('tabela.ejs', { erro: "Tabela não encontrada" });
            }
        }
    };
export default TabelaController;