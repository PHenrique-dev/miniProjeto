const express = require('express');
const { 
  createVeiculo, 
  getVeiculos, 
  getVeiculoById, 
  updateVeiculo, 
  deleteVeiculo 
} = require('../controllers/veiculoController');
const router = express.Router();

router.post('/veiculos', createVeiculo);
router.get('/veiculos', getVeiculos);
router.get('/veiculos/:id', getVeiculoById);
router.put('/veiculos/:id', updateVeiculo);
router.delete('/veiculos/:id', deleteVeiculo);

module.exports = router;
