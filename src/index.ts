import * as dotenv from 'dotenv';
import Client from './config/Client';
import { InitDB } from './config/Db';

dotenv.config();

let client: Client;
let db: any;

const init = async () => {
  client = new Client();
  db = await InitDB();

  return { client, db };
};

(async () => {
  const { client, db } = await init();

  client.start();

  console.log(db);
})();

export const getClient = () => client;
export const getDb = () => db;
