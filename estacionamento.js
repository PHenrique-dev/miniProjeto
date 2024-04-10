class Estacionamento {
    constructor() {
      this.itens = [];
      this.subtotal = null;
      this.taxa = null;
      this.total = null;
    }
  
    adiciona(item) {
      this.itens.push(item);
    }
  
    adicionaTaxa(valor) {
      this.taxa = valor;
    }
  
    calculaTotal() {
      this.subtotal = this.itens.reduce((acum, item) => acum + item.valorEstacionamento(), 0);
      return this.subtotal + this.taxa;
    }
  
    finalizaEstacionamento() {
      if (this.itens.length === 0) {
        throw new Error('Nenhum veiculo para adicionar');
      }
  
      this.total = this.calculaTotal();
  
      return {
        subtotal: this.subtotal,
        taxa: this.taxa,
        total: this.total,
      };
    }
  }
  
  module.exports = Estacionamento;