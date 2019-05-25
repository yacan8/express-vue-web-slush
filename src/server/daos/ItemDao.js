import BaseDao from './base';

export default class ItemDao extends BaseDao {
    
    modelName = 'Item';

    constructor(modules) {
        super(modules);
    }

    async getList() {
        return await this.findAll();
    }

    async addItem(item) {
        return await this.create(item);
    }
}