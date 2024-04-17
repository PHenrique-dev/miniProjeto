class Proprietario {
    constructor(nome, sobrenome, placaVeiculo){
        this.itens = [];
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
        this.itens.push(item);
      }
      remover(item) {
        const index = this.itens.indexOf(item);
        if (index !== -1) {
          this.itens.splice(index, 1);
        }
      }
}
module.exports = Proprietario;