import { Collection } from 'discord.js';

export interface Event {
  name: string;
  once?: boolean | false;
  execute: (...args) => void;
}

export interface Command {
  name: string;
  data: SlashCommandBuilder | any;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

export interface Channel {
  channelID: string;
  departement: number;
  lastFetch: number;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string;
      CLIENT_ID: string;
    }
  }
}

declare module 'discord.js' {
  export interface Client {
    commands: Collection;
  }
}
