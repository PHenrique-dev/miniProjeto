const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const Proprietario = require('./proprietario')(sequelize);
const Veiculo = require('./veiculo')(sequelize);
const Estacionamento = require('./estacionamento')(sequelize);

Proprietario.hasMany(Veiculo);
Veiculo.belongsTo(Proprietario);

module.exports = {
  sequelize,
  Proprietario,
  Veiculo,
  Estacionamento
};
