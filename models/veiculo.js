const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Veiculo', {
    placa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM,
      values: ['moto', 'carro'],
      allowNull: false
    }
  });
};
