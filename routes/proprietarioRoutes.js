const express = require('express');
const { 
  createProprietario, 
  getProprietarios, 
  getProprietarioById, 
  updateProprietario, 
  deleteProprietario 
} = require('../controllers/proprietarioController');
const router = express.Router();

router.post('/proprietarios', createProprietario);
router.get('/proprietarios', getProprietarios);
router.get('/proprietarios/:id', getProprietarioById);
router.put('/proprietarios/:id', updateProprietario);
router.delete('/proprietarios/:id', deleteProprietario);

module.exports = router;
