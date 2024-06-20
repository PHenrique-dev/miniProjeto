const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Proprietario API', () => {
  it('should create a new proprietario', async () => {
    const response = await request(app).post('/proprietarios').send({
      nome: 'João Silva',
      telefone: '123456789'
    });
    expect(response.status).toBe(201);
    expect(response.body.nome).toBe('João Silva');
  });

  it('should get all proprietarios', async () => {
    const response = await request(app).get('/proprietarios');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a proprietario by ID', async () => {
    const proprietario = await request(app).post('/proprietarios').send({
      nome: 'Maria Silva',
      telefone: '987654321'
    });
    const response = await request(app).get(`/proprietarios/${proprietario.body.id}`);
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Maria Silva');
  });

  it('should update a proprietario', async () => {
    const proprietario = await request(app).post('/proprietarios').send({
      nome: 'Carlos Silva',
      telefone: '1122334455'
    });
    const response = await request(app).put(`/proprietarios/${proprietario.body.id}`).send({
      nome: 'Carlos Oliveira',
      telefone: '5566778899'
    });
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Carlos Oliveira');
  });

  it('should delete a proprietario', async () => {
    const proprietario = await request(app).post('/proprietarios').send({
      nome: 'Ana Silva',
      telefone: '6677889900'
    });
    const response = await request(app).delete(`/proprietarios/${proprietario.body.id}`);
    expect(response.status).toBe(204);
  });
});
