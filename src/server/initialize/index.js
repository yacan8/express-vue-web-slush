/**
 * @file init
 */
import loadProperties from './properties';
import { initSequelize } from './sequelize';
import container from '../container';
import * as awilix from 'awilix';
import { installModel } from '../models';

export default async function initialize() {
  const config = await loadProperties();
  const { mysql } = config;
  const sequelize = initSequelize(mysql);
  installModel(sequelize);
  container.register({
    globalConfig: awilix.asValue(config),
    sequelize: awilix.asValue(sequelize)
  });
}