const express = require('express');
const router = express.Router();
const estacionamentoController = require('../app/controllers/estacionamentoController');

router.post('/adicionar-veiculo', estacionamentoController.adicionarVeiculo);
router.delete('/remover-veiculo', estacionamentoController.removerVeiculo);
router.post('/adicionar-taxa', estacionamentoController.adicionarTaxa);
router.get('/calcular-total', estacionamentoController.calcularTotal);
router.post('/finalizar-estacionamento', estacionamentoController.finalizarEstacionamento);

module.exports = router;
