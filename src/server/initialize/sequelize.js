/**
 * @file sequelize
 */
import Sequelize from 'sequelize';

let sequelize;

const defaultPreset = {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port: 3306,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export function initSequelize(config) {
  const { host, database, password, port, user } = config;
  sequelize = new Sequelize(database, user, password, Object.assign({}, defaultPreset, {
    host,
    port
  }));
  return sequelize;
};

export default sequelize;