import BaseService from './base';

export default class TodoService extends BaseService {
  constructor({ itemDao }) {
    super();
    this.itemDao = itemDao;
  }

  async getList() {
    const [err, list] = await this.itemDao.getList();
    if (err) {
      return this.fail('获取列表失败', null, err);
    }
    return this.success('查询成功', list);
  }

  async addTodoItem(item) {
    const [exsitErr, itemExsit] = await this.itemDao.findOne({
      where: {
        name: item.name
      }
    });
    if (exsitErr) {
      return this.fail('添加失败', null, err);
    }
    if (itemExsit) {
      return this.fail('已存在');
    }
    const [addErr] = await this.itemDao.addItem(item);
    if (addErr) {
      return this.fail('添加失败', null, err);
    }
    return this.success('添加成功')
  }

  async updateItem(item) {
    const [err, updateItem] = await this.itemDao.update(item, {
      where: {
        name: item.name,
      }
    });
    if (err) {
      return this.fail('更新失败');
    }
    return this.success('更新成功');
  }
}