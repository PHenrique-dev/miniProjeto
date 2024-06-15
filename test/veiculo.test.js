const request = require('supertest');
const express = require('express');
const veiculoRoutes = require('../routes/veiculoRoutes');
const { db, clearDatabase } = require('./db-handler');

const app = express();
app.use(express.json());
app.use('/veiculos', veiculoRoutes);

describe('Testes do controlador de Veiculo', () => {
    let server;
    
    beforeAll(() => {
        server = app.listen(3001); // ou qualquer porta disponível para testes
        clearDatabase();
        run(`Inserir em veiculos (tipo, placa, tempo)
                    VALUES ('Carro', 'ABC-1234', 2),
                           ('Moto', 'XYZ-5678', 3)`, done);
    });

    afterAll(() => {
        server.close();
    });

    test('Deve adicionar um novo veículo', async () => {
        const response = await request(app)
            .post('/veiculos/adicionar')
            .send({
                tipo: 'Carro',
                placa: 'ABC-1234',
                tempo: 2
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Veículo adicionado com sucesso');
        expect(response.body.veiculo).toMatchObject({
            tipo: 'Carro',
            placa: 'ABC-1234',
            tempo: 2
        });
    });

    test('Deve listar todos os veículos', async () => {
        const response = await request(app)
            .get('/veiculos/listar');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('Deve buscar um veículo pelo placa', async () => {
        const placa = 'ABC-1234';
        const response = await request(app)
            .get(`/veiculos/${placa}`);

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            tipo: 'Carro',
            placa: 'ABC-1234',
            tempo: 2
        });
    });

    test('Deve atualizar um veículo', async () => {
        const placa = 'ABC-1234';
        const response = await request(app)
            .put(`/veiculos/${placa}`)
            .send({
                tipo: 'Moto',
                tempo: 3
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Veículo atualizado com sucesso');
        expect(response.body.veiculo).toMatchObject({
            tipo: 'Moto',
            placa: 'ABC-1234',
            tempo: 3
        });
    });

    test('Deve remover um veículo', async () => {
        const placa = 'ABC-1234';
        const response = await request(app)
            .delete(`/veiculos/${placa}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Veículo removido com sucesso');
    });

    test('Deve retornar erro ao buscar veículo não existente', async () => {
        const placa = 'ZZZ-9999';
        const response = await request(app)
            .get(`/veiculos/${placa}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'Veículo não encontrado');
    });

    test('Deve retornar erro ao remover veículo não existente', async () => {
        const placa = 'ZZZ-9999';
        const response = await request(app)
            .delete(`/veiculos/${placa}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'Veículo não encontrado');
    });
});
