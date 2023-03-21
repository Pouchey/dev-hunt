import sqlite3 from 'sqlite3';

export const createTable = async (db: sqlite3.Database) => {
  db.run(`CREATE TABLE IF NOT EXISTS channels (
    channelID TEXT PRIMARY KEY NOT NULL,
    region INTEGER NOT NULL,
    UNIQUE(channelID)
  )`);
};

export const registerChannel = async (db: sqlite3.Database, channelID: string, region: number) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO channels (channelID, region) VALUES (?, ?)`, [channelID, region], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(void 0);
      }
    });
  });
};

export const unregisterChannel = async (db: sqlite3.Database, channelID: string) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM channels WHERE channelID = ?`, [channelID], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(void 0);
      }
    });
  });
};

export const getChannel = async (db: sqlite3.Database, channelID: string) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM channels WHERE channelID = ?`, [channelID], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

export default {
  createTable,
  actions: [registerChannel, unregisterChannel, getChannel]
};
