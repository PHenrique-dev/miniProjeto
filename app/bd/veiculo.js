const Sequelize = require('sequelize');
const sequelize = require('./db');

const Veiculo = sequelize.define('veiculo', {
  // Atributos do veículo
  placa: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  tipo: {
    type: Sequelize.STRING
  },
  tempo: {
    type: Sequelize.INTEGER
  }
  // outros atributos conforme necessário
});

module.exports = Veiculo;