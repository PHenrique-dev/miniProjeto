const request = require('supertest');
const { sequelize, Veiculo } = require('../models');
const app = require('../app');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Estacionamento API', () => {
  it('should create a new estacionamento', async () => {
    const veiculo = await Veiculo.create({ placa: 'MNO6789', tipo: 'carro' });
    const response = await request(app).post('/estacionamentos').send({
      veiculoId: veiculo.id
    });
    expect(response.status).toBe(201);
    expect(response.body.veiculoId).toBe(veiculo.id);
  });

  it('should get all estacionamentos', async () => {
    const response = await request(app).get('/estacionamentos');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a estacionamento by ID', async () => {
    const veiculo = await Veiculo.create({ placa: 'PQR1234', tipo: 'moto' });
    const estacionamento = await request(app).post('/estacionamentos').send({
      veiculoId: veiculo.id
    });
    const response = await request(app).get(`/estacionamentos/${estacionamento.body.id}`);
    expect(response.status).toBe(200);
    expect(response.body.veiculoId).toBe(veiculo.id);
  });

  it('should update a estacionamento', async () => {
    const veiculo = await Veiculo.create({ placa: 'STU5678', tipo: 'carro' });
    const estacionamento = await request(app).post('/estacionamentos').send({
      veiculoId: veiculo.id
    });
    const response = await request(app).put(`/estacionamentos/${estacionamento.body.id}`).send({
      horaSaida: new Date(),
      valorCobrado: 20.0
    });
    expect(response.status).toBe(200);
    expect(response.body.valorCobrado).toBe(20.0);
  });

  it('should delete a estacionamento', async () => {
    const veiculo = await Veiculo.create({ placa: 'VWX3456', tipo: 'moto' });
    const estacionamento = await request(app).post('/estacionamentos').send({
      veiculoId: veiculo.id
    });
    const response = await request(app).delete(`/estacionamentos/${estacionamento.body.id}`);
    expect(response.status).toBe(204);
  });
});
