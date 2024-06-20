const express = require('express');
const { 
  createEstacionamento, 
  getEstacionamentos, 
  getEstacionamentoById, 
  updateEstacionamento, 
  deleteEstacionamento 
} = require('../controllers/estacionamentoController');
const router = express.Router();

router.post('/estacionamentos', createEstacionamento);
router.get('/estacionamentos', getEstacionamentos);
router.get('/estacionamentos/:id', getEstacionamentoById);
router.put('/estacionamentos/:id', updateEstacionamento);
router.delete('/estacionamentos/:id', deleteEstacionamento);

module.exports = router;
