import sqlite3 from 'sqlite3';

export const createTable = async (db: sqlite3.Database) => {
  db.run(`CREATE TABLE IF NOT EXISTS channels (
    channelID TEXT PRIMARY KEY NOT NULL,
    departement INTEGER PRIMARY KEY NOT NULL,
    lastFetch INTEGER NOT NULL

  )`);
};

export const registerChannel = async (db: sqlite3.Database, channelID: string, departement: number) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO channels (channelID, departement) VALUES (?, ?)`, [channelID, departement], (err) => {
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

export const updateLastFetch = async (
  db: sqlite3.Database,
  channelID: string,
  lastFetch: number
) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE channels SET lastFetch = ? WHERE channelID = ?`,
      [lastFetch, channelID],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(void 0);
        }
      }
    );
  });
};

export default {
  createTable,
  actions: [registerChannel, unregisterChannel, getChannel, updateLastFetch]
};
