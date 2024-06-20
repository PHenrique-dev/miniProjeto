const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Veiculo API', () => {
  it('should create a new veiculo', async () => {
    const response = await request(app).post('/veiculos').send({
      placa: 'ABC1234',
      tipo: 'carro'
    });
    expect(response.status).toBe(201);
    expect(response.body.placa).toBe('ABC1234');
  });

  it('should get all veiculos', async () => {
    const response = await request(app).get('/veiculos');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a veiculo by ID', async () => {
    const veiculo = await request(app).post('/veiculos').send({
      placa: 'XYZ5678',
      tipo: 'moto'
    });
    const response = await request(app).get(`/veiculos/${veiculo.body.id}`);
    expect(response.status).toBe(200);
    expect(response.body.placa).toBe('XYZ5678');
  });

  it('should update a veiculo', async () => {
    const veiculo = await request(app).post('/veiculos').send({
      placa: 'DEF5678',
      tipo: 'carro'
    });
    const response = await request(app).put(`/veiculos/${veiculo.body.id}`).send({
      placa: 'GHI9012',
      tipo: 'moto'
    });
    expect(response.status).toBe(200);
    expect(response.body.placa).toBe('GHI9012');
  });

  it('should delete a veiculo', async () => {
    const veiculo = await request(app).post('/veiculos').send({
      placa: 'JKL3456',
      tipo: 'carro'
    });
    const response = await request(app).delete(`/veiculos/${veiculo.body.id}`);
    expect(response.status).toBe(204);
  });
});
