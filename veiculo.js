class Veiculo {
    constructor(tipo, placa, tempo) {
      this.tipo = tipo;
      this.placa = placa;
      this.tempo = tempo;

      if(typeof tipo !== 'string' || tipo.trim() === ''){
        throw new Error('O tipo deve ser uma string não vazia.');
      }
      if(typeof placa !== 'string' || placa.trim() === ''){
        throw new Error('Placa não informada, informe a placa do seu veiculo.');
      }
      if(typeof tempo !== 'number' || tempo === ''){
        throw new Error('Tempo não informado, informe o tempo de estacionamento do seu veiculo.');
      }
      if(tipo === 'Carro'){
        this.valor = 20;
      } else if(tipo === "Moto"){
        this.valor = 15;
      }else if(tipo === 'Caminhão'){
        this.valor = 30;
      }else{
        console.log('Tipo de veiculo não aceito em nosso estacionamento')
      }
      if (!/^([A-Z]{3})-([0-9]{4})$/.test(placa)) {
        throw new Error('Placa inválida, informe uma placa no formato brasileiro (XXX-1234).');
      }
    }
  
    valorEstacionamento() {
      return this.tempo * this.valor;
    }
    
  
  }
  
  module.exports = Veiculo;