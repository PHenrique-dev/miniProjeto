class Proprietario {
    constructor(nome, sobrenome, telefone, id){
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.telefone = telefone;
      this.id = id;      

        if(typeof nome !== 'string' || nome.trim() === ''){
            throw new Error('O nome deve ser uma string não vazia.');
          }
        if(typeof sobrenome !== 'string' || sobrenome.trim() === ''){
            throw new Error('O sobrenome deve ser uma string não vazia.');
          }
          if (typeof telefone !== 'string' || telefone.trim() === '') {
            throw new Error('Telefone não informado ou em um formato inválido. Por favor, informe seu telefone.');
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
      listarVeiculos() {
        return this.veiculos;
    }
}
module.exports = Proprietario;