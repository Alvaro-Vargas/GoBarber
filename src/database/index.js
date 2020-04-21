import Sequelize from 'sequelize';

import User from '../app/models/User';

// Import database configuration
import databaseConfig from '../config/database';

// Create an array with the imported models so we can loop through it.
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // This variables is the one expected in our Models init()
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
