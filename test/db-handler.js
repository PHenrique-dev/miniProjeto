const sqlite3 = require('sqlite3').verbose();

// Configura um banco de dados SQLite em memória
const db = new sqlite3.Database(':memory:');

// Cria a tabela de estacionamento
db.serialize(() => {
    db.run(`CREATE TABLE estacionamento (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo TEXT NOT NULL,
        placa TEXT NOT NULL,
        tempo INTEGER NOT NULL,
        valor INTEGER NOT NULL
    )`);
});

// Cria a tabela de veiculos
db.serialize(() => {
    db.
    
run(`CREATE TABLE veiculos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo TEXT NOT NULL,
        placa TEXT NOT NULL UNIQUE,
        tempo INTEGER NOT NULL
    )`);
});

// Cria a tabela de proprietarios
db.serialize(() => {
    db.
    
run(`CREATE TABLE proprietarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        sobrenome TEXT NOT NULL,
        telefone TEXT NOT NULL
    )`);
});



// Função para limpar as tabelas
const clearDatabase = () => {
    db.serialize(() => {
        db.run('DELETE FROM estacionamento');
        db.run('DELETE FROM veiculos');
        db.run('DELETE FROM proprietarios');
    });
};


// Fecha o banco de dados ao finalizar os testes
afterAll((done) => {
    db.close(done);
});

module.exports = {
    db,
    clearDatabase,
};
