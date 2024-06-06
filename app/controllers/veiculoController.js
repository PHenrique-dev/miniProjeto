const Veiculo = require('../models/veiculo');

let veiculos = []; // Simula um banco de dados

const adicionarVeiculo = (req, res) => {
    const { tipo, placa, tempo } = req.body;
    try {
        const veiculo = new Veiculo(tipo, placa, tempo);
        veiculos.push(veiculo);
        res.status(201).json({ message: 'Veículo adicionado com sucesso', veiculo });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listarVeiculos = (req, res) => {
    res.status(200).json(veiculos);
};

const buscarVeiculo = (req, res) => {
    const { placa } = req.params;
    const veiculo = veiculos.find(v => v.placa === placa);
    if (veiculo) {
        res.status(200).json(veiculo);
    } else {
        res.status(404).json({ message: 'Veículo não encontrado' });
    }
};

const atualizarVeiculo = (req, res) => {
    const { placa } = req.params;
    const { tipo, tempo } = req.body;
    const veiculo = veiculos.find(v => v.placa === placa);
    if (veiculo) {
        if (tipo) veiculo.tipo = tipo;
        if (tempo) veiculo.tempo = tempo;
        try {
            veiculo.validarDados();
            veiculo.definirValor();
            res.status(200).json({ message: 'Veículo atualizado com sucesso', veiculo });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(404).json({ message: 'Veículo não encontrado' });
    }
};

const removerVeiculo = (req, res) => {
    const { placa } = req.params;
    const index = veiculos.findIndex(v => v.placa === placa);
    if (index !== -1) {
        veiculos.splice(index, 1);
        res.status(200).json({ message: 'Veículo removido com sucesso' });
    } else {
        res.status(404).json({ message: 'Veículo não encontrado' });
    }
};

module.exports = {
    adicionarVeiculo,
    listarVeiculos,
    buscarVeiculo,
    atualizarVeiculo,
    removerVeiculo
};
