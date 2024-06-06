const express = require('express');
const router = express.Router();
const proprietarioController = require('../app/controllers/proprietarioController');

router.post('/adicionar', proprietarioController.adicionarProprietario);
router.get('/listar', proprietarioController.listarProprietarios);
router.get('/:id', proprietarioController.buscarProprietario);
router.put('/:id', proprietarioController.atualizarProprietario);
router.delete('/:id', proprietarioController.deletarProprietario);

module.exports = router;
