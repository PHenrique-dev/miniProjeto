const Veiculo = require('./veiculo')
class Proprietario {
    constructor(nome, sobrenome, placaVeiculo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.placaVeiculo = placaVeiculo;

        Veiculo.validarPlaca(placaVeiculo);

        if (placa !== placaVeiculo) {
            throw new Error('Placa inválida, a placa informada não pertence a nenhum veículo.');
          }
        if(typeof nome !== 'string' || nome.trim() === ''){
            throw new Error('O nome deve ser uma string não vazia.');
          }
        if(typeof sobrenome !== 'string' || sobrenome.trim() === ''){
            throw new Error('O sobrenome deve ser uma string não vazia.');
          }
          if (!/^([A-Z]{3})-([0-9]{4})$/.test(placaVeiculo)) {
            throw new Error('Placa inválida, informe uma placa no formato brasileiro (XXX-1234).');
          }
    }
}
module.exports = Proprietario;