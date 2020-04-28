import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

// Import database configuration
import databaseConfig from '../config/database';

// Create an array with the imported models so we can loop through it.
const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    // This variables is the one expected in our Models init()
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
