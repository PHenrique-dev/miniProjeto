const request = require('supertest');
const app = require('../index'); // Importa a aplicação principal

describe('Testes da aplicação principal', () => {
    let server;
    
    beforeAll(() => {
        server = app.listen(3004); // Porta para testes
    });

    afterAll(() => {
        server.close();
    });

    test('Deve responder com 404 para rotas desconhecidas', async () => {
        const response = await request(app).get('/rota-inexistente');
        expect(response.status).toBe(404);
    });

    // Testa uma rota conhecida (pode ser qualquer uma que esteja configurada em index.js)
    test('Deve responder com 200 para rota /proprietarios/listar', async () => {
        const response = await request(app).get('/proprietarios/listar');
        expect(response.status).toBe(200);
    });

    // Outros testes conforme necessário...
});
