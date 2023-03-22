import fs from 'fs';
import path from 'path';
import sqlite3 from 'sqlite3';

import Tables from './tables';

const dbPath = 'data';
const dbName = 'database.db';

export const InitFiles = async () => {
  if (!fs.existsSync(path.join(dbPath, dbName))) {
    fs.mkdirSync(dbPath, { recursive: true });

    fs.writeFileSync(path.join(dbPath, dbName), '');
  }
};

export const createTable = async (db: sqlite3.Database) => {
  await Promise.all(Tables.createTables.map((createTable: any) => createTable(db)));
};

export const createActions = async (db: sqlite3.Database) => {
  await Promise.all(
    Tables.actions.map((actions: any) => {
      return Promise.all(
        actions.map((action: any) => {
          // @ts-ignore
          db[action.name] = (args: any) => action(db, args);
        })
      );
    })
  );
};

export const InitDB = async () => {
  await InitFiles();

  const db = new sqlite3.Database(path.join(dbPath, dbName));

  await createTable(db);
  await createActions(db);

  return db;
};
