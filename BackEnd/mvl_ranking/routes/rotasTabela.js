import express from 'express'
import TabelaController from '../controllers/TabelaControllers.js'
const router = express.Router();

// rota para listar os livros
router.get('/tabela', TabelaController.listarTabela);

// rota para adicionar livros
router.post('/tabela', TabelaController.adicionar);

// rota para marcar como lido
router.post('/tabela/:id', TabelaController.atualizarPontuacao);

export default router;