const express = require('express');
const app = express();
const Veiculo = require('./veiculo');
const Proprietario = require('./proprietario');

// Middleware para o Express reconhecer JSON no corpo da requisição
app.use(express.json());

// Array de veículos e proprietários, futuramente serão bancos de dados
let veiculos = [];
let proprietarios = [];

// Rotas para Veículos
app.post('/veiculos', (req, res) => {
  try {
    const { tipo, placa, tempo } = req.body;
    const veiculo = new Veiculo(tipo, placa, tempo);
    veiculos.push(veiculo);
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/veiculos', (req, res) => {
  res.json(veiculos);
});

app.get('/veiculos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const veiculo = veiculos.find(veiculo => veiculo.id === id);
  if (veiculo) {
    res.json(veiculo);
  } else {
    res.status(404).json({ message: 'Veículo não encontrado' });
  }
});

app.put('/veiculos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { tipo, placa, tempo } = req.body;
  const index = veiculos.findIndex(veiculo => veiculo.id === id);
  if (index !== -1) {
    veiculos[index] = new Veiculo(tipo, placa, tempo);
    res.json(veiculos[index]);
  } else {
    res.status(404).json({ message: 'Veículo não encontrado' });
  }
});

app.delete('/veiculos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = veiculos.findIndex(veiculo => veiculo.id === id);
  if (index !== -1) {
    veiculos.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Veículo não encontrado' });
  }
});

// Rotas para Proprietários
app.post('/proprietarios', (req, res) => {
  try {
    const { nome, sobrenome, telefone } = req.body;
    const proprietario = Proprietario.create(proprietarios, { nome, sobrenome, telefone });
    res.status(201).json(proprietario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/proprietarios', (req, res) => {
  res.json(Proprietario.listAll(proprietarios));
});

app.get('/proprietarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const proprietario = Proprietario.findById(proprietarios, id);
  if (proprietario) {
    res.json(proprietario);
  } else {
    res.status(404).json({ message: 'Proprietário não encontrado' });
  }
});

app.put('/proprietarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, sobrenome, telefone } = req.body;
  const updatedProprietario = Proprietario.update(proprietarios, id, { nome, sobrenome, telefone });
  if (updatedProprietario) {
    res.json(updatedProprietario);
  } else {
    res.status(404).json({ message: 'Proprietário não encontrado' });
  }
});

app.delete('/proprietarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const success = Proprietario.delete(proprietarios, id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Proprietário não encontrado' });
  }
});

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
