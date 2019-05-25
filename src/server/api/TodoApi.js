import { route, GET, POST } from 'awilix-express';

@route('/todo')
export default class TodoAPI {

  constructor({ todoService }) {
    this.todoService = todoService;
  }

  @route('/getData')
  @GET()
  async getData(req, res) {
    res.successPrint('请求成功', {
      info: 'Welcome to Express-Vue App'
    })
  }

  @route('/getTodolist')
  @GET()
  async getTodolist(req, res) {
    const [err, todolist] = await this.todoService.getList();
    if (err) {
      res.failPrint('服务端异常');
      return;
    }
    res.successPrint('查询成功', todolist);
  }

  @route('/addTodoItem')
  @POST()
  async addTodoItem(req, res) {
    const { name, state } = req.body;
    const [err] = await this.todoService.addTodoItem({name, state});
    if (err) {
      res.failPrint(err.message);
      return;
    }
    res.successPrint('添加成功');
  }

  
  @route('/updateItem')
  @POST()
  async updateItem(req, res) {
    const { name, state } = req.body;
    const [err] = await this.todoService.updateItem({name, state});
    if (err) {
      res.failPrint(err.message);
      return;
    }
    res.successPrint('操作成功');
  }


}