const express = require('express');
const app = express();
const Veiculo = require('./veiculo');

// Middleware para o Express reconhecer JSON no corpo da requisição
app.use(express.json());

// Array de veículos, futuramente será um banco de dados
let veiculos = [];

// Rota para criar um novo veículo
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

// Rota para listar todos os veículos
app.get('/veiculos', (req, res) => {
  res.json(veiculos);
});

// Rota para buscar um veículo pelo ID
app.get('/veiculos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const veiculo = veiculos.find(veiculo => veiculo.id === id);
  if (veiculo) {
    res.json(veiculo);
  } else {
    res.status(404).json({ message: 'Veículo não encontrado' });
  }
});

// Rota para atualizar um veículo pelo ID
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

// Rota para deletar um veículo pelo ID
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

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
