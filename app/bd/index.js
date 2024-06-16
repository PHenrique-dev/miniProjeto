const sequelize = require('./db');
const Veiculo = require('./veiculo');
const Proprietario = require('./proprietario');
const Estacionamento = require('./estacionamento');

// Relacionamento entre as tabelas (se necessário)
Veiculo.belongsTo(Proprietario);

// Sincronização com o banco de dados
sequelize.sync({ force: true }).then(() => {
  console.log('Tabelas criadas com sucesso!');
}).catch(error => {
  console.error('Erro ao criar tabelas:', error);
});