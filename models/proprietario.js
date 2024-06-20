const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Proprietario', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
