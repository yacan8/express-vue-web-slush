/**
 * @file base dao
 */
import db from '../models';
import { promiseCatch } from '../util';

export default class BaseDao {

  constructor(modules) {
    const request = modules.request;
    this.transaction = request.transaction;
    this.sequelize = db.sequelize;
  }

  insert(params) {
    const Model = this.getModel();
    const config = this.getConfig();
    return promiseCatch(Model.create(params, config));
  }

  batchInsert(params) {
    const Model = this.getModel();
    const config = this.getConfig();
    return promiseCatch(Model.bulkCreate(params, config));
  }

  delete(params) {
    const Model = this.getModel();
    const config = this.getConfig();
    return promiseCatch(Model.destroy({
      ...config,
      ...params
    }));
  }

  findOne(params) {
    const Model = this.getModel();
    return promiseCatch(Model.findOne(params).then(models => {
      return models || null;
    }));
  }

  findAll(params) {
    const Model = this.getModel();
    return promiseCatch(Model.findAll(params));
  }

  update(params, query) {
    const Model = this.getModel();
    const config = this.getConfig();
    return promiseCatch(Model.update(params, {
      ...config,
      ...query
    }));
  }

  getModel() {
    return db[this.modelName];
  }

  getConfig() {
    const config = {};
    if (this.transaction) {
      config.transaction = this.transaction;
    }
    return config;
  }

  commit() {
    if (this.transaction) {
      return promiseCatch(this.transaction.commit());
    }
    return promiseCatch(Promise.resolve());
  }

  rollback() {
    if (this.transaction) {
      return promiseCatch(this.transaction.rollback());
    }
    return promiseCatch(Promise.resolve());
  }
}