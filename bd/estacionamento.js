const Sequelize = require('sequelize');
const sequelize = require('./db');

const estacionamento = sequelize.define('estacionamento', {
  itens: {
    type: Sequelize.STRING,
    allowNull: false
  },
  subtotal: {
    type: Sequelize.INTEGER
  },
  taxa: {
    type: Sequelize.INTEGER
  },
  total: {
    type: Sequelize.INTEGER
  }
  // outros atributos conforme necessário
});

module.exports = estacionamento;