import sqlite3 from 'sqlite3';

export const createTable = async (db: sqlite3.Database) => {
  db.run(`CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  )`);
};

export default {
  createTable,
  actions: []
};
