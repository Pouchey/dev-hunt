import sqlite3 from 'sqlite3';

// double primary key channelID and departement

export const createTable = async (db: sqlite3.Database) => {
  db.run(`CREATE TABLE IF NOT EXISTS channels (
    channelID TEXT NOT NULL,
    departement INTEGER NOT NULL,
    lastFetch INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (channelID, departement)

  )`);
};

export const registerChannel = async (
  db: sqlite3.Database,
  args: { channelID: string; departement: number }
) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO channels (channelID, departement) VALUES (?, ?)`,
      [args.channelID, args.departement],
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

export const getChannels = async (db: sqlite3.Database) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM channels`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
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
  actions: [registerChannel, unregisterChannel, getChannel, getChannels, updateLastFetch]
};
