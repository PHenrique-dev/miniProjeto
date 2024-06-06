const Proprietario = require('../models/proprietario');

let proprietarios = []; // Simula um banco de dados

const adicionarProprietario = (req, res) => {
    try {
        const novoProprietario = Proprietario.create(proprietarios, req.body);
        res.status(201).json(novoProprietario);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const listarProprietarios = (req, res) => {
    const todosProprietarios = Proprietario.listAll(proprietarios);
    res.status(200).json(todosProprietarios);
};

const buscarProprietario = (req, res) => {
    const { id } = req.params;
    const proprietario = Proprietario.findById(proprietarios, parseInt(id));
    if (proprietario) {
        res.status(200).json(Proprietario.renderProprietario(proprietario));
    } else {
        res.status(404).send('Proprietário não encontrado');
    }
};

const atualizarProprietario = (req, res) => {
    const { id } = req.params;
    try {
        const proprietarioAtualizado = Proprietario.update(proprietarios, parseInt(id), req.body);
        res.status(200).json(proprietarioAtualizado);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deletarProprietario = (req, res) => {
    const { id } = req.params;
    const deletado = Proprietario.delete(proprietarios, parseInt(id));
    if (deletado) {
        res.status(200).send('Proprietário deletado com sucesso');
    } else {
        res.status(404).send('Proprietário não encontrado');
    }
};

module.exports = {
    adicionarProprietario,
    listarProprietarios,
    buscarProprietario,
    atualizarProprietario,
    deletarProprietario
};
