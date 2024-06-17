const Sequelize = require('sequelize');
const sequelize = require('./db');

const Proprietario = sequelize.define('proprietario', {
  // Atributos do proprietário
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING
  },
  veiculos: {
    type: Sequelize.STRING
  },
  // outros atributos conforme necessário
});

module.exports = Proprietario;