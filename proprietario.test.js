const Proprietario = require('./proprietario')


describe('Testes para cadastro do proprietario', () => {
    it('Deve ter 3 campos: nome, sobrenome, placaVeiculo', () => {
      const proprietario = new Proprietario('Marcos', 'Castro', 'PHS-1234', 'PHS-1234');
  
      expect(proprietario.nome).toBe('Marcos');
      expect(proprietario.sobrenome).toBe('Castro');
      expect(proprietario.placa).toBe('PHS-1234');
      expect(proprietario.placaVeiculo).toBe('PHS-1234');
    });
  
    it('Deve verificar se a placa informada pelo proprietario corresponde a placa de algum veiculo', () => {
      const proprietario = new proprietario('Moto', 'QJP-1234', 5);
  
      expect(proprietario.valorEstacionamento()).toBeCloseTo(75);
    });
  });