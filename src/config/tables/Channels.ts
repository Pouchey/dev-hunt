import sqlite3 from 'sqlite3';

export const createTable = async (db: sqlite3.Database) => {
  db.run(`CREATE TABLE IF NOT EXISTS channels (
    channelID TEXT PRIMARY KEY NOT NULL,
    UNIQUE(channelID)
  )`);
};

export const addChannel = async (db: sqlite3.Database, channelID: string) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO channels (channelID) VALUES (?)`, [channelID], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(void 0);
      }
    });
  });
};

export default {
  createTable,
  actions: [addChannel]
};
