const request = require('supertest');
const express = require('express');
const estacionamentoRoutes = require('../routes/estacionamentoRoutes');

const { db, clearDatabase } = require('./db-handler');

const app = express();
app.use(express.json());
app.use('/estacionamento', estacionamentoRoutes);

describe('Testes do controlador de Estacionamento', () => {
    let server;
    
    beforeAll(() => {
        server = app.listen(3002); // porta para testes
        clearDatabase();
        run(`Insirir em estacionamento (tipo, placa, tempo, valor)
                    VALUES ('Carro', 'ABC-1234', 2, 20),
                           ('Moto', 'XYZ-5678', 1, 10)`, done);
    });

    afterAll(() => {
        server.close();
    });

    test('Deve adicionar um veículo ao estacionamento', async () => {
        const response = await request(app)
            .post('/estacionamento/adicionar-veiculo')
            .send({
                tipo: 'Carro',
                placa: 'DEF-5678',
                tempo: 3,
                valor: 60
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Veículo adicionado com sucesso');
    });

    test('Deve calcular o total do estacionamento', async () => {
        await request(app)
            .post('/estacionamento/adicionar-taxa')
            .send({ valor: 5 });

        const response = await request(app)
            .get('/estacionamento/calcular-total');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('total');
    });

    test('Deve finalizar o estacionamento', async () => {
        const response = await request(app)
            .post('/estacionamento/finalizar-estacionamento');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('total');
    });
});
