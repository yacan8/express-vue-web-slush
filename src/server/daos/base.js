
/**
 * @file base model
 */
import db from '../models';

export default class Dao {
    
    constructor(modules) {
        const request = modules.request;
        this.transaction = request.transaction;
        this.sequelize = db.sequelize;
    }

    create(params) {
        return new Promise((resolve, reject) => {
            const Model = this.getModel();
            Model.create(params).then(modol => {
                resolve(modol || []);
            }).catch(e => {
                console.error(e);
                resolve(false);
            });
        });
    }

    delete(params) {
        return new Promise((resolve, reject) => {
            const Model = this.getModel();
            Model.destroy({
                where: params
            }).then(affectedRows => {
                resolve(true);
            }).catch(e => {
                console.error(e);
                resolve(false);
            });
        });
    }

    findAll() {
        return new Promise((resolve, reject) => {
            const Model = this.getModel();
            Model.findAll().then(data => {
                resolve(data || []);
            });
        });
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

    insert(params) {
        const Model = this.getModel();
        const config = this.getConfig();
        return Model.create(params, config).then(model => {
            return model;
        }).catch(e => {
            console.error(e);
            return false;
        });
    }

    batchInsert(params) {
        const Model = this.getModel();
        const config = this.getConfig();
        return Model.bulkCreate(params, config).then(() => {
            return true;
        }).catch(e => {
            console.error(e);
            return false;
        });
    }

}