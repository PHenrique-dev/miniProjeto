const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Estacionamento', {
    veiculoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Veiculos',
        key: 'id'
      }
    },
    horaEntrada: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    horaSaida: {
      type: DataTypes.DATE
    },
    valorCobrado: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  });
};
