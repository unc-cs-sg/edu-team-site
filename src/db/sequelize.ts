// const Sequelize       = require("sequelize");
// const Profiles        = require("../models/profiles");

import { Sequelize, Options } from 'sequelize';
// import Profiles from '../models/'
import { Profile } from '../models/profiles';

if (!process.env.DATABASE_URL) {
    require("dotenv").config();
}

interface DBOptions {
    dialect: string;
    pool: object;
    operatorsAliases: boolean;
    logging: boolean;
    host?: string;
    port?: number;
}

const options = {
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: false,
    logging: false,
    host: '',
    port: 3000,
};

if (process.env.POSTGRESQL_SERVICE_HOST) {
    console.log("POSTGRESQL_SERVICE_HOST: " + process.env.POSTGRESQL_SERVICE_HOST);
    options.host = process.env.POSTGRESQL_SERVICE_HOST;
}

if (process.env.POSTGRESQL_SERVICE_PORT) {
    console.log("POSTGRESQL_SERVICE_PORT: " + process.env.POSTGRESQL_SERVICE_PORT);
    options.port = parseInt(process.env.POSTGRESQL_SERVICE_PORT);
}

// const sequelize = new Sequelize(process.env.DATABASE_URL, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, options);
const sequelize = new Sequelize(process.env.DATABASE_URL, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD);

/**
 * Define Models
 */

// sequelize.profiles = Profiles.init_table(sequelize);

/**
 * Define Relationships
 */

export default sequelize;
