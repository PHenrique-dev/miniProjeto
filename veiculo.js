class Veiculo {
    constructor(tipo, placa, tempo, valor) {
      this.tipo = tipo;
      this.placa = placa;
      this.tempo = tempo;
      this.valor = valor;
    }
  
    valorEstacionamento() {
      return this.tempo * this.valor;
    }
  }
  
  module.exports = Veiculo;