import Channels from './Channels';
import Jobs from './Jobs';

export default {
  createTables: [Channels.createTable, Jobs.createTable],
  actions: [Channels.actions, Jobs.actions]
};
