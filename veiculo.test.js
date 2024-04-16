const Veiculo = require('./veiculo');

describe('Testes dos itens', () => {
  it('Deve ter 3 campos: tipo, placa, tempo', () => {
    const veiculo = new Veiculo('Carro', 'PHS-1234', 2);

    expect(veiculo.tipo).toBe('Carro');
    expect(veiculo.placa).toBe('PHS-1234');
    expect(veiculo.tempo).toBe(2);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const veiculo = new Veiculo('Moto', 'QJP-1234', 5);

    expect(veiculo.valorEstacionamento()).toBeCloseTo(75);
  });
});