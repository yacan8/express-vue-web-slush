import BaseDao from './base';

export default class ItemDao extends BaseDao {
    
    modelName = 'Item';

    constructor(modules) {
        super(modules);
    }

}