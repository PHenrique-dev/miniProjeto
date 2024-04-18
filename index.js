const Estacionamento = require('./estacionamento')
const Veiculo = require('./meu-projeto/atividade/veiculo')

const veiculo = new Estacionamento();
veiculo.adiciona(new Veiculo('Carro', 'QJPD34', 2));

veiculo.adicionaTaxa(10);
veiculo.calculaTotal();
veiculo.finalizaEstacionamento();

console.log(veiculo)

