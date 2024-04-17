class Proprietario {
    constructor(nome, sobrenome, placaVeiculo){
        this.veiculos = [];
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.placaVeiculo = placaVeiculo;

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
    adiciona(item) {
        this.veiculos.push(item);
      }
      remover(item) {
        const index = this.veiculos.indexOf(item);
        if (index !== -1) {
          this.veiculos.splice(index, 1);
        }
      }
}
module.exports = Proprietario;