class Veiculo {
  constructor(tipo, placa, tempo) {
      this.tipo = tipo;
      this.placa = placa;
      this.tempo = tempo;

      this.validarDados();

      // Define o valor base com base no tipo de veículo
      this.definirValor();
  }

  validarDados() {
      if (typeof this.tipo !== 'string' || this.tipo.trim() === '') {
          throw new Error('O tipo deve ser uma string não vazia.');
      }
      if (!/^([A-Z]{3})-([0-9]{4})$/.test(this.placa)) {
          throw new Error('Placa inválida, informe uma placa no formato brasileiro (XXX-1234).');
      }
      if (typeof this.tempo !== 'number' || isNaN(this.tempo) || this.tempo <= 0) {
          throw new Error('Tempo não informado, informe o tempo de estacionamento do seu veiculo.');
      }
  }

  definirValor() {
      switch (this.tipo) {
          case 'Carro':
              this.valor = 20;
              break;
          case 'Moto':
              this.valor = 15;
              break;
          case 'Caminhão':
              this.valor = 30;
              break;
          default:
              throw new Error('Tipo de veículo não aceito em nosso estacionamento');
      }
  }

  valorEstacionamento() {
      return this.tempo * this.valor;
  }
}

module.exports = Veiculo;
