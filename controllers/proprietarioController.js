const { Proprietario } = require('../models');

exports.createProprietario = async (req, res) => {
  try {
    const proprietario = await Proprietario.create(req.body);
    res.status(201).json(proprietario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProprietarios = async (req, res) => {
  try {
    const proprietarios = await Proprietario.findAll();
    res.status(200).json(proprietarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProprietarioById = async (req, res) => {
  try {
    const proprietario = await Proprietario.findByPk(req.params.id);
    if (!proprietario) {
      return res.status(404).json({ error: 'Proprietario not found' });
    }
    res.status(200).json(proprietario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProprietario = async (req, res) => {
  try {
    const proprietario = await Proprietario.findByPk(req.params.id);
    if (!proprietario) {
      return res.status(404).json({ error: 'Proprietario not found' });
    }
    await proprietario.update(req.body);
    res.status(200).json(proprietario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProprietario = async (req, res) => {
  try {
    const proprietario = await Proprietario.findByPk(req.params.id);
    if (!proprietario) {
      return res.status(404).json({ error: 'Proprietario not found' });
    }
    await proprietario.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
