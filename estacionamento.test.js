const Estacionamento = require('./estacionamento')
const Veiculo = require('./veiculo')

describe('Testes do estacionamento com Sucesso', () => {
    it('Deve inicializar vazio', () => {
        const estacionamento = new Estacionamento();
        expect(estacionamento.subtotal).toBeNull();
      });
    
      it('Deve ter veiculos', () => {
        const veiculo = new Veiculo('Carro', 'QJPD34', 2, 20);
        const veiculo2 = new Veiculo('Moto', 'MJD03', 3, 15);
    
        const estacionamento = new Estacionamento();
        estacionamento.adiciona(veiculo);
        estacionamento.adiciona(veiculo2);
    
        expect(typeof estacionamento).toBe('object');
        expect(estacionamento.itens).toContain(veiculo);
        expect(estacionamento.itens).toContain(veiculo2);
    
        expect(estacionamento.itens[0]).toBe(veiculo);
        expect(estacionamento.itens[1]).toBe(veiculo2);
      });
    
      it('Deve ter a propriedade "total" na inicialização', () => {
        const estacionamento = new Estacionamento();
    
        expect(estacionamento).toHaveProperty('total');
      });
    
      it('Deve ter a propriedade "taxa" na inicialização', () => {
        const estacionamento = new Estacionamento();
    
        expect(estacionamento).toHaveProperty('taxa');
      });
    
      it('Deve adicionar taxa', () => {
        const estacionamento = new Estacionamento();
        estacionamento.adicionaTaxa(10);
    
        expect(estacionamento.taxa).toBe(10);
      });
    
      it('Deve calcular o total', () => {
        const veiculo = new Veiculo('Carro', 'QJPD34', 2, 20);
        const veiculo2 = new Veiculo('Moto', 'MJD03', 3, 15);
    
        const estacionamento = new Estacionamento();
        estacionamento.adiciona(veiculo);
        estacionamento.adiciona(veiculo2);
    
        estacionamento.adicionaTaxa(10);
    
        expect(estacionamento.calculaTotal()).toBeCloseTo(95);
      });
    
      it('Deve finalizar o estacionamento', () => {
        const veiculo = new Veiculo('Carro', 'QJPD34', 2, 20);
        const veiculo2 = new Veiculo('Moto', 'MJD03', 3, 15);
    
        const estacionamento = new Estacionamento();
        estacionamento.adiciona(veiculo);
        estacionamento.adiciona(veiculo2);
    
        estacionamento.adicionaTaxa(10);
    
        estacionamento.finalizaEstacionamento();
    
        expect(estacionamento.total).toBeCloseTo(95);
      });
      it('Deve remover o veículo', () => {
        const veiculo = new Veiculo('Carro', 'QJPD34', 2, 20);
        const veiculo2 = new Veiculo('Moto', 'MJD03', 3, 15);

        const estacionamento = new Estacionamento();
        estacionamento.adiciona(veiculo);
        estacionamento.adiciona(veiculo2);

        estacionamento.remover(veiculo); 
        expect(estacionamento.itens).not.toContain(veiculo);
        expect(estacionamento.itens).toContain(veiculo2);
    });
})
describe('Testes do estacionamento com Falha', () => {
    it('Deve retornar erro ao finalizar estacionamento sem veiculo', () => {
        const estacionamento = new Estacionamento();
    
        expect(() => estacionamento.finalizaEstacionamento()).toThrowError('Nenhum veiculo para adicionar');
      });
})