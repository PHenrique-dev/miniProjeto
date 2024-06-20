const { Veiculo } = require('../models');

exports.createVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.create(req.body);
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVeiculos = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.status(200).json(veiculos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVeiculoById = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ error: 'Veiculo not found' });
    }
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ error: 'Veiculo not found' });
    }
    await veiculo.update(req.body);
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ error: 'Veiculo not found' });
    }
    await veiculo.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
