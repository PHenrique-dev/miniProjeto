const { Estacionamento, Veiculo } = require('../models');

exports.createEstacionamento = async (req, res) => {
  try {
    const estacionamento = await Estacionamento.create(req.body);
    res.status(201).json(estacionamento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEstacionamentos = async (req, res) => {
  try {
    const estacionamentos = await Estacionamento.findAll({ include: Veiculo });
    res.status(200).json(estacionamentos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEstacionamentoById = async (req, res) => {
  try {
    const estacionamento = await Estacionamento.findByPk(req.params.id, { include: Veiculo });
    if (!estacionamento) {
      return res.status(404).json({ error: 'Estacionamento not found' });
    }
    res.status(200).json(estacionamento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEstacionamento = async (req, res) => {
  try {
    const estacionamento = await Estacionamento.findByPk(req.params.id);
    if (!estacionamento) {
      return res.status(404).json({ error: 'Estacionamento not found' });
    }
    await estacionamento.update(req.body);
    res.status(200).json(estacionamento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEstacionamento = async (req, res) => {
  try {
    const estacionamento = await Estacionamento.findByPk(req.params.id);
    if (!estacionamento) {
      return res.status(404).json({ error: 'Estacionamento not found' });
    }
    await estacionamento.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
