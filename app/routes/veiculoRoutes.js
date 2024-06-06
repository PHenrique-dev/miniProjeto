const express = require('express');
const router = express.Router();
const veiculoController = require('../app/controllers/veiculoController');

router.post('/adicionar', veiculoController.adicionarVeiculo);
router.get('/listar', veiculoController.listarVeiculos);
router.get('/:placa', veiculoController.buscarVeiculo);
router.put('/:placa', veiculoController.atualizarVeiculo);
router.delete('/:placa', veiculoController.removerVeiculo);

module.exports = router;
