const Estacionamento = require('../models/estacionamento');
const Veiculo = require('../models/veiculo');

let estacionamento = new Estacionamento();

const adicionarVeiculo = (req, res) => {
    const { tipo, placa, tempo, valor } = req.body;
    try {
        const veiculo = new Veiculo(tipo, placa, tempo, valor);
        estacionamento.adiciona(veiculo);
        res.status(201).json({ message: 'Veículo adicionado com sucesso', veiculo });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const removerVeiculo = (req, res) => {
    const { placa } = req.body;
    try {
        const veiculo = estacionamento.itens.find(v => v.placa === placa);
        if (veiculo) {
            estacionamento.remover(veiculo);
            res.status(200).json({ message: 'Veículo removido com sucesso', veiculo });
        } else {
            res.status(404).json({ message: 'Veículo não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const adicionarTaxa = (req, res) => {
    const { valor } = req.body;
    try {
        estacionamento.adicionaTaxa(valor);
        res.status(200).json({ message: 'Taxa adicionada com sucesso', taxa: valor });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const calcularTotal = (req, res) => {
    try {
        const total = estacionamento.calculaTotal();
        res.status(200).json({ subtotal: estacionamento.subtotal, taxa: estacionamento.taxa, total });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const finalizarEstacionamento = (req, res) => {
    try {
        const resultado = estacionamento.finalizaEstacionamento();
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    adicionarVeiculo,
    removerVeiculo,
    adicionarTaxa,
    calcularTotal,
    finalizarEstacionamento
};
