import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

async function criarProprietario() {
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });

db.run(` CREATE TABLE IF NOT EXISTS propietario(id INTERGER PRIMARY KEY, nome TEXT, sobrenome TEXT) `)
}

criarProprietario();