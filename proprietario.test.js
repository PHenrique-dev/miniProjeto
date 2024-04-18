const Proprietario = require('./proprietario');
const Veiculo = require('./veiculo');

describe('Testes para cadastro do proprietario', () => {
    it('Deve ter 3 campos: nome, sobrenome, telefone', () => {
        const proprietario = new Proprietario('Marcos', 'Castro', '(77)981625185');

        expect(proprietario.nome).toBe('Marcos');
        expect(proprietario.sobrenome).toBe('Castro');
        expect(proprietario.telefone).toBe('(77)981625185');
    });

    it('O proprietario deve conseguir adicionar e remover um veiculo', () => {
        const proprietario = new Proprietario('Marcos', 'Castro', '(77)981625185');
        const veiculo1 = new Veiculo('Carro', 'QJP-1234', 2);
        const veiculo2 = new Veiculo('Moto', 'ABC-5678', 1);

        proprietario.adiciona(veiculo1);
        proprietario.adiciona(veiculo2);

        expect(proprietario.veiculos).toContain(veiculo1);
        expect(proprietario.veiculos).toContain(veiculo2);

        proprietario.remover(veiculo1);

        expect(proprietario.veiculos).not.toContain(veiculo1);
        expect(proprietario.veiculos).toContain(veiculo2);
    });
    it('Deve listar todos os veiculos adicionados pelo proprietario', () =>{
        const proprietario = new Proprietario('Marcos', 'Castro', '(77)981625185');
        const veiculo1 = new Veiculo('Carro', 'QJP-1234', 2);
        const veiculo2 = new Veiculo('Moto', 'ABC-5678', 1);
    
        proprietario.adiciona(veiculo1);
        proprietario.adiciona(veiculo2);
    
        const listaDeVeiculos = proprietario.listarVeiculos();
    
        expect(listaDeVeiculos).toContain(veiculo1);
        expect(listaDeVeiculos).toContain(veiculo2);
    })
});
