const request = require('supertest');
const express = require('express');
const proprietarioRoutes = require('../routes/proprietarioRoutes');
const { db, clearDatabase } = require('./db-handler');

const app = express();
app.use(express.json());
app.use('/proprietarios', proprietarioRoutes);

describe('Testes do controlador de Proprietario', () => {
    let server;
    
    beforeAll(() => {
        server = app.listen(3003); // porta para testes
        clearDatabase();
        run(`Inserir em proprietarios (nome, sobrenome, telefone)
                    VALUES ('João', 'Silva', '123456789'),
                           ('Maria', 'Santos', '987654321')`, done);
    });

    afterAll((done) => {
        server.close(done);
    });

    test('Deve adicionar um novo proprietário', async () => {
        const response = await request(app)
            .post('/proprietarios/adicionar')
            .send({
                nome: 'João',
                sobrenome: 'Silva',
                telefone: '123456789'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Proprietário adicionado com sucesso');
    });


    test('Deve listar todos os proprietários', async () => {
        const response = await request(app)
            .get('/proprietarios/listar');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('Deve buscar um proprietário pelo id', async () => {
        const response = await request(app)
            .get('/proprietarios/1');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('nome', 'João');
    });

    test('Deve atualizar um proprietário', async () => {
        const response = await request(app)
            .put('/proprietarios/1')
            .send({ telefone: '987654321' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Proprietário atualizado com sucesso');
    });

    test('Deve remover um proprietário', async () => {
        const response = await request(app)
            .delete('/proprietarios/1');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Proprietário removido com sucesso');
    });
});
