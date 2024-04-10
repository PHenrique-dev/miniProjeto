const Veiculo = require('./veiculo');

describe('Testes dos itens', () => {
  it('Deve ter 3 campos: tipo, placa, tempo e valor', () => {
    const veiculo = new Veiculo('Carro', 'QJPD34', 2, 20);

    expect(veiculo.tipo).toBe('Carro');
    expect(veiculo.placa).toBe('QJPD34');
    expect(veiculo.tempo).toBe(2);
    expect(veiculo.valor).toBe(20);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const veiculo = new Veiculo('Carro', 'QJPD34', 2, 20);

    expect(veiculo.valorEstacionamento()).toBeCloseTo(40);
  });
});