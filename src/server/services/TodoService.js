export default class TodoService {
  constructor({ itemDao }) {
    this.itemDao = itemDao;
  }

  async getList() {
    try {
      const list = await this.itemDao.getList();
      return [null, list];
    } catch (e) {
      console.error(e);
      return [new Error('服务端异常'), null];
    }
  }

  async addTodoItem(item) {
    try {
      const itemExsit = await this.itemDao.findOne({
        where: {
          ...item
        }
      });
      if (itemExsit) {
        return [new Error('已存在'), false];
      }
      const addResult = await this.itemDao.addItem(item);
      return [null, addResult];
    } catch (e) {
      console.error(e);
      return [new Error('服务端异常'), null];
    }
  }

  async updateItem(item) {
    try {
      const updateItem = await this.itemDao.update(item, {
        where: {
          name: item.name,
        }
      });
      return [null, updateItem];
    } catch (e) {
      console.error(e);
      return [new Error('服务端异常'), null];
    }
  }
}